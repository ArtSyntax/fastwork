# -*- coding: utf-8 -*-
# Generated by Django 1.11.13 on 2018-05-29 11:19
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('mailservice', '0003_mail_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='mail',
            name='timestamp',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]