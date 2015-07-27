# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('manager', '0008_auto_20150719_2054'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='sub_options',
            field=models.TextField(null=True, blank=True),
        ),
    ]
