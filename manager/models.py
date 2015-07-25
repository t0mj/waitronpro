"""Models for the Manager app."""
import uuid
from django.db import models
from django.utils import timezone


class Option(models.Model):

    """Class for the Options table."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=50)
    tag = models.CharField(max_length=20)
    active = models.BooleanField(default=True)
    price = models.FloatField()
    note = models.TextField()


class Order(models.Model):

    """Class for the Orders table."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    order_num = models.CharField(max_length=20)
    total = models.FloatField()
    tax = models.FloatField()
    date = models.DateTimeField(default=timezone.now, editable=False)
    date_complete = models.DateTimeField(editable=False)
    complete = models.BooleanField(default=False)
    # name = models.ForeignKey('ModelAdmin.user.name')


class OrdLine(models.Model):

    """Class for the OrdLine table."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    order_num = models.ForeignKey('Order')
    prod_num = models.ForeignKey('Product')
    qty = models.IntegerField(default=0)
    price = models.FloatField()


class Product(models.Model):

    """Class for the Products table."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    prod_num = models.CharField(max_length=20)
    name = models.CharField(max_length=50)
    type = models.CharField(max_length=20)
    description = models.TextField()
    date_added = models.DateTimeField(default=timezone.now, editable=False)
    active = models.BooleanField(default=True)
    price = models.FloatField()
    sub_options = models.TextField()


class Rate(models.Model):

    """Class for the Rates table."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    sales_tax = models.FloatField()
    donation = models.FloatField()


class Setting(models.Model):

    """Class for the Settings table."""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=20)
    value = models.BooleanField(default=False)
