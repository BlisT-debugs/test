# Generated by Django 4.2.23 on 2025-07-05 11:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0002_order_name_order_phone_order_service_type_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='special_instructions',
            field=models.TextField(blank=True, null=True),
        ),
    ]
