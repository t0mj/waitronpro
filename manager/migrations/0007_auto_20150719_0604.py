# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('manager', '0006_auto_20150719_0602'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='date_complete',
            field=models.DateTimeField(editable=False),
        ),
    ]
