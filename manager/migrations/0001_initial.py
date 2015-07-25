# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import uuid


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, serialize=False, editable=False, primary_key=True)),
                ('order_num', models.CharField(max_length=20)),
                ('total', models.FloatField()),
                ('tax', models.FloatField()),
                ('date', models.DateTimeField()),
            ],
        ),
        migrations.CreateModel(
            name='OrdLine',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, serialize=False, editable=False, primary_key=True)),
                ('qty', models.IntegerField(default=0)),
                ('price', models.FloatField()),
                ('order_num', models.ForeignKey(to='manager.Order')),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, serialize=False, editable=False, primary_key=True)),
                ('prod_num', models.CharField(max_length=20)),
                ('name', models.CharField(max_length=50)),
                ('type', models.CharField(max_length=20)),
                ('description', models.TextField()),
                ('date_added', models.DateTimeField()),
            ],
        ),
        migrations.CreateModel(
            name='Rate',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, serialize=False, editable=False, primary_key=True)),
                ('sales_tax', models.FloatField()),
                ('donation', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='Setting',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, serialize=False, editable=False, primary_key=True)),
                ('name', models.CharField(max_length=20)),
                ('value', models.BooleanField(default=False)),
            ],
        ),
        migrations.AddField(
            model_name='ordline',
            name='prod_num',
            field=models.ForeignKey(to='manager.Product'),
        ),
    ]
