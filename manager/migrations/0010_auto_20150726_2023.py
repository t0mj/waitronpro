# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('manager', '0009_auto_20150726_0047'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='ordline',
            name='qty',
        ),
        migrations.AddField(
            model_name='ordline',
            name='options',
            field=models.TextField(null=True, blank=True),
        ),
        migrations.AlterField(
            model_name='option',
            name='note',
            field=models.TextField(null=True, blank=True),
        ),
    ]
