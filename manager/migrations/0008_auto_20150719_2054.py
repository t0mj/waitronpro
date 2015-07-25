# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('manager', '0007_auto_20150719_0604'),
    ]

    operations = [
        migrations.CreateModel(
            name='Option',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, serialize=False, editable=False, primary_key=True)),
                ('name', models.CharField(max_length=50)),
                ('tag', models.CharField(max_length=20)),
                ('active', models.BooleanField(default=True)),
                ('price', models.FloatField()),
                ('note', models.TextField()),
            ],
        ),
        migrations.AddField(
            model_name='product',
            name='price',
            field=models.FloatField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='product',
            name='sub_options',
            field=models.TextField(default=None),
            preserve_default=False,
        ),
    ]
