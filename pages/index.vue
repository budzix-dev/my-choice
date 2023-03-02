<script setup lang="ts"></script>

<template>
  <main>
    <div
      id="top"
      class="hero min-h-screen"
      style="background-image: url(/images/doors.jpg)"
    >
      <div class="hero-overlay bg-opacity-80"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-lg space-y-6">
          <h1 class="mb-5 text-7xl font-bold">Moje Wybory</h1>
          <p class="mb-5">
            Cześć, zapraszam Cię do zobaczenia mojego obecnego postrzegania
            swojej własnej przyszłości. Mam nadzieję, że Ci się spodoba.
          </p>
          <a
            class="btn btn-accent btn-md rounded-md px-5 gap-1"
            href="#what-why"
          >
            Rozpocznij podróż
            <Icon name="bx:right-arrow-alt" size="15" />
          </a>
        </div>
      </div>
    </div>
    <div id="what-why" class="min-h-screen max-h-screen min-w-screen px-5 grid">
      <QuestionCard
        img-src="/images/what.png"
        title="Co jest moim obecnym wyborem?"
        img-bg-color="bg-accent"
        class="h-[80vh]"
      >
        <p class="mt-2 text-lg">Programista.</p>
      </QuestionCard>
    </div>
    <div
      id="what-why"
      class="min-h-screen max-h-screen min-w-screen px-5 grid py-20"
    >
      <QuestionCard
        img-src="/images/why.png"
        title="Jaka jest motywacja mojego wyboru?"
        img-bg-color="bg-secondary"
        class="h-screen"
      >
        <p class="mt-2 text-lg">
          Od kiedy zacząłem moją przygodę z programowaniem parę lat temu
          uwielbiałem kodować. Oczywiście, są także inne czynniki decyzji, ale
          myślę, że to jest ten najważniejszy z nich.
        </p>
      </QuestionCard>
    </div>
  </main>
</template>
