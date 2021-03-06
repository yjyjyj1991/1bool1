# Generated by Django 4.0.4 on 2022-04-20 05:48

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='goods',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.CharField(max_length=255)),
                ('event', models.IntegerField()),
                ('hit', models.IntegerField()),
                ('is_sell', models.IntegerField()),
                ('photo_path', models.CharField(max_length=255)),
                ('price', models.CharField(max_length=255)),
                ('start_date', models.DateTimeField(auto_now_add=True)),
                ('update_date', models.DateTimeField(auto_now=True)),
                ('category', models.IntegerField()),
                ('convinence', models.CharField(max_length=255)),
            ],
        ),
    ]
