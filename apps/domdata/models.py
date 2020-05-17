from django.db import models


class BaseModel(models.Model):
    name = models.CharField(max_length=256)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

    def __str__(self):
        return f"{self.name}"


class Nation(BaseModel):
    dominion_id = models.PositiveIntegerField(db_index=True, unique=True)


class Commander(BaseModel):
    dominion_id = models.PositiveIntegerField(db_index=True, unique=True)
    general = models.BooleanField(default=True)
    nations = models.ManyToManyField(Nation)


class Unit(BaseModel):
    dominion_id = models.PositiveIntegerField(db_index=True, unique=True)
    general = models.BooleanField(default=True)
    nations = models.ManyToManyField(Nation)
