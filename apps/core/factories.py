import random

import factory
import factory.fuzzy

from apps.domdata.models import Nation, Unit

ERA_CHOICES = [x[0] for x in Nation.ERA_CHOICES]


class NationFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Nation
        django_get_or_create = ("dominion_id",)

    name = factory.Faker("company")
    era = factory.fuzzy.FuzzyChoice(ERA_CHOICES)
    dominion_id = factory.Faker("pyint")


class UnitFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Unit
        django_get_or_create = ("dominion_id",)

    name = factory.Faker("name")
    dominion_id = factory.Faker("pyint")
    commander = factory.fuzzy.FuzzyChoice([True, False])

    @factory.post_generation
    def nation_set(self, create, extracted, **kwargs):
        if not create:
            return

        if not extracted:
            extracted = []

        if not Nation.objects.exists():
            NationFactory.create_batch(10)

        ids = list(Nation.objects.values_list("pk", flat=True))
        nations_to_add = [random.choice(ids) for x in range(1, 4)]
        self.nations.add(*nations_to_add)
