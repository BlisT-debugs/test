from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
import os

class Command(BaseCommand):
    help = "Creates a default superuser if it doesn't exist"

    def handle(self, *args, **kwargs):
        User = get_user_model()

        username = os.getenv("username", "Arpan")
        email = os.getenv("email", "arpan@example.com")
        password = os.getenv("password", "Arpan123")
        phone_number = os.getenv("phone_number", "7884557497")
        first_name = os.getenv("first_name", "Arpan")
        last_name = os.getenv("last_name", "Raj")
        address_line1 = os.getenv("address_line1", "48/54 Main St")
        city = os.getenv("city", "Vegas")
        state = os.getenv("state", "Uttar Pradesh")
        postal_code = os.getenv("postal_code", "12745")
        country = os.getenv("country", "India")

        if not User.objects.filter(username=username).exists():
            user = User.objects.create_superuser(
                username=username,
                email=email,
                password=password,
                phone_number=phone_number,
                first_name=first_name,
                last_name=last_name,
                address_line1=address_line1,
                city=city,
                state=state,
                postal_code=postal_code,
                country=country,
            )
            self.stdout.write(self.style.SUCCESS(f"✅ Superuser '{username}' created successfully!"))
        else:
            self.stdout.write(self.style.WARNING(f"⚠️ Superuser '{username}' already exists."))
