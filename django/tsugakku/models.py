from django.db import models
from django.contrib.auth.validators import UnicodeUsernameValidator
from django.contrib.auth.models import (
    UserManager, AbstractBaseUser, PermissionsMixin,
)
from django.urls import reverse_lazy
from django.utils import timezone
import uuid


class User(AbstractBaseUser, PermissionsMixin):

    username_validator = UnicodeUsernameValidator()

    username = models.CharField(max_length=150, unique=True, validators=[username_validator])
    email = models.EmailField(max_length=254, unique=True)
    nickname = models.CharField(max_length=150)
    tel = models.CharField(max_length=20, unique=True)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(default=timezone.now)

    objects = UserManager()

    EMAIL_FIELD = "email"
    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = ["email"]

    def __str__(self):
        return self.username

    # def get_absolute_url(self):
    #     return reverse_lazy('life:home')


class SchoolModel(models.Model):
    name =models.CharField(max_length=150)
    adress =models.CharField(max_length=150)

    def __str__(self):
        return self.name


class GroupModel(models.Model):
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4)
    uid = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    sid = models.ForeignKey(SchoolModel, on_delete=models.DO_NOTHING)
    group_name =models.CharField(max_length=150)
    adress = models.CharField(max_length=150, null=True, blank=True)
    memo = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.group_name


class GroupMemberModel(models.Model):
    uid = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    gid = models.ForeignKey(GroupModel, on_delete=models.DO_NOTHING)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class ChildrenModel(models.Model):
    uid = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    name = models.CharField(max_length=150)
    grade = models.PositiveSmallIntegerField(default=1)
    classroom = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class TeamModel(models.Model):
    gid = models.ForeignKey(GroupModel, on_delete=models.DO_NOTHING)
    team_name =models.CharField(max_length=150)
    memo = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.team_name


class TeamMemberModel(models.Model):
    tid = models.ForeignKey(TeamModel, on_delete=models.DO_NOTHING)
    cid = models.ForeignKey(ChildrenModel, on_delete=models.CASCADE)
    order = models.PositiveSmallIntegerField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class AttendanceModel(models.Model):
    tmid = models.ForeignKey(TeamMemberModel, on_delete=models.DO_NOTHING)
    attendance = models.BooleanField(default=True)
    date = models.DateField(default=timezone.now)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class PictureModel(models.Model):
    gid = models.ForeignKey(GroupModel, on_delete=models.DO_NOTHING)
    picture_link = models.URLField()
    adress = models.CharField(max_length=150)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class AlertModel(models.Model):
    gid = models.ForeignKey(GroupModel, on_delete=models.DO_NOTHING)
    text = models.TextField()
    deadline = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class ChatModel(models.Model):
    gid = models.ForeignKey(GroupModel, on_delete=models.DO_NOTHING, null=True)
    tid = models.ForeignKey(TeamModel, on_delete=models.DO_NOTHING, null=True)
    uid = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
