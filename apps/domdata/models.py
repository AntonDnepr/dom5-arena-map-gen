from django.db import models


class BaseModel(models.Model):

    VANILLA, DE, DEBUG = 1, 2, 3

    CHOICES = ((VANILLA, "VANILLA"), (DE, "DE"), (DEBUG, "DEBUG"))

    name = models.CharField(max_length=256)
    modded = models.PositiveSmallIntegerField(default=VANILLA, choices=CHOICES)
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

    def __str__(self):
        return f"({self.get_era_display()}){self.name}"


class Unit(BaseModel):
    dominion_id = models.PositiveIntegerField(db_index=True, unique=True)
    commander = models.BooleanField(default=False)
    nations = models.ManyToManyField(Nation)
