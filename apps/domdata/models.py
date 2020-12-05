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
    EARLY, MIDDLE, LATE = 1, 2, 3

    ERA_CHOICES = ((EARLY, "EA"), (MIDDLE, "MA"), (LATE, "LA"))

    dominion_id = models.PositiveIntegerField(db_index=True, unique=True)
    era = models.PositiveSmallIntegerField(choices=ERA_CHOICES)


class Commander(BaseModel):
    dominion_id = models.PositiveIntegerField(db_index=True, unique=True)
    indy = models.BooleanField(default=True)
    nations = models.ManyToManyField(Nation)


class Unit(BaseModel):
    dominion_id = models.PositiveIntegerField(db_index=True, unique=True)
    indy = models.BooleanField(default=True)
    nations = models.ManyToManyField(Nation)
