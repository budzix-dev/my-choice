<script setup lang="ts">
import traits from "~~/utils/traits";
import skills from "~~/utils/skills";
import interests from "~~/utils/interests";
</script>

<template>
  <main>
    <Hero img-src="/images/doors.jpg" :opacity="70">
      <div class="max-w-lg space-y-6">
        <h1 class="mb-5 text-7xl font-bold">Mój Wybór</h1>
        <p class="mb-5">
          Cześć, zapraszam Cię do zobaczenia mojego obecnego postrzegania swojej
          własnej przyszłości. Mam nadzieję, że Ci się spodoba.
        </p>
        <a
          class="btn btn-accent btn-md rounded-md px-5 gap-1 z-10"
          href="#what-why"
        >
          Rozpocznij podróż
          <Icon name="bx:right-arrow-alt" size="15" />
        </a>
      </div>
    </Hero>
    <Hero img-src="/images/question-mark.jpg" :opacity="80" id="what-why">
      <div class="grid space-y-10">
        <div
          class="max-w-2xl space-y-6 border shadow-lg px-3 py-2 bg-gray-700 bg-opacity-30"
        >
          <h1 class="mb-5 text-8xl font-bold">Co?</h1>
          <p class="mb-5 text-xl">
            W chwili obecnej wiążę swoją przyszłość z branżą IT. Dokładniej,
            choć wciąż nie do końca dokładnie, mówiąc, z programowaniem.
          </p>
        </div>

        <div
          class="max-w-2xl space-y-6 border shadow-lg bg-gray-700 bg-opacity-30 px-3 py-2"
        >
          <h1 class="mb-5 text-8xl font-bold">Dlaczego?</h1>
          <p class="mb-5 text-xl">
            Swoją przygodę z programowaniem zacząłem w 6 klasie podstawówki. Od
            początku koncept programowania wydał mi się bardzo ciekawy i byłem
            nim zafascynowany. Na początku traktowałem to jako hobby, ale z
            czasem zacząłem myśleć o programowaniu w kontekście pracy. Nie byłem
            jednak pewien, czy to jest ta profesja którą powinienem wybrać.
            Wciąż do końca nie jestem i wątpię czy kiedykolwiek będę. Jest to
            jednak zdecydowanie ten kierunek, o którym myślę obecnie
            najpoważniej. <br />Bo, po prostu, lubię programować!
          </p>
        </div>
        <a
          class="btn btn-primary btn-md rounded-md px-5 gap-1 z-10"
          href="#about-programming"
        >
          O zawodzie programisty
          <Icon name="bx:down-arrow-alt" size="15" />
        </a>
      </div>
    </Hero>
    <Hero id="about-programming" img-src="/images/chalkboard.jpg">
      <div>
        <div class="grid space-y-5 lg:space-y-10 border p-7">
          <h1 class="text-5xl xl:text-6xl font-medium">Co robi programista?</h1>
          <div class="text-lg xl:text-xl text-left">
            Oczywistą odpowiedzią jest:
            <span class="font-bold">pisze kod</span>. Jest to pisanie programu w
            odpowiednim języku programowania w celu wykonania określonej
            czynności.
            <br />
            Ale to nie wszystko. Do innych czynności programisty należą:
            <ul class="list-disc grid space-y-1 mt-1 ml-3">
              <li>
                <span class="font-bold">Planowanie projektów</span> - dużą część
                czasu programiście zajmuje zaplanowanie projektu przed
                napisaniem kodu do niego. W tym czasie programista musi określić
                jakie funkcje ma posiadać dany program, jakie technologie
                wykorzystać, jakie narzędzia, itd. Jest to jedna z kluczowych
                czynności programisty.
              </li>
              <li>
                <span class="font-bold">Testowanie</span> - każdy napisany
                kod/część kodu należy przetestować - tj. sprawdzić czy działa
                poprawnie. Istnieje wiele metod testowania, ale najczęściej
                używane są testy jednostkowe, testy integracyjne, testy
                systemowe, testy akceptacyjne. Źle przetestowany kod może
                prowadzić do m. in. problemów z bezpieczeństwem, błędów w
                działaniu programu, itd.
              </li>
              <li>
                <span class="font-bold">Wdrażanie</span> - jest to proces, w
                którym programista musi wdrożyć napisany przez niego program na
                inny komputer (np. serwer) - tam, gdzie będzie on używany. W tym
                czasie programista musi zainstalować wszystkie potrzebne
                narzędzia, biblioteki, itd. oraz skonfigurować je tak, aby
                program działał poprawnie.
              </li>
            </ul>
            Oczywiście istnieje więcej czynności należących do pracy programisty
            - to są jednak te kluczowe z nich.
            <br />
            <p class="mt-3">
              Efektem tych czynności są w założeniu sprawne programy
              komputerowe. Przykładami są m. in. aplikacje internetowe,
              aplikacje desktopowe, aplikacje mobilne, systemy zarządzania itd.
            </p>
          </div>
          <hr />
          <h1 class="mt-2 font-medium text-5xl">
            W jakich warunkach i z kim pracuje programista?
          </h1>
          <p class="text-lg xl:text-xl text-left">
            Praktycznie jedynym warunkiem jest praca przy komputerze.
            Programista może pracować w przeróżnych miejscach - w biurze, w
            domu, w kawiarni, w parku, w samochodzie, itd.
            <br />Programista może pracować samodzielnie lub w zespole. W
            zespole programista może pracować z innymi programistami,
            projektantami, testerami, itd. Natomiast samemu programista może
            pracować np. w formie tzw. freelancingu - czyli pracować dla wielu
            klientów na zlecenie.
          </p>
        </div>
        <a
          class="btn btn-info btn-md rounded-md px-10 gap-1 mt-4 z-10"
          href="#traits-and-skills"
        >
          Jakie cechy i umiejętności powinien więc posiadać dobry programista?
          <Icon name="bx:down-arrow-alt" size="15" />
        </a>
      </div>
    </Hero>
    <Hero id="traits-and-skills" img-src="/images/chalkboard2.jpg">
      <div>
        <h1 class="text-6xl font-medium mb-10">
          Jakie cechy i umiejętności powinien więc posiadać dobry programista?
        </h1>
        <div class="flex border p-10">
          <div class="w-1/2 px-3 grid space-y-5">
            <div class="rounded-sm p-5 flex bg-base-300 border items-center">
              <Icon name="game-icons:skills" size="30" />
              <h1 class="ml-3 text-3xl">Umiejętności</h1>
            </div>
            <div
              class="rounded-lg border p-5 flex bg-base-100 items-center"
              v-for="skill in skills"
            >
              <Icon :name="skill.icon" :size="`${skill.iconSize}`" />
              <div class="ml-5">
                <p class="text-lg text-left">
                  {{ skill.name }} - {{ skill.description }}
                </p>
              </div>
            </div>
          </div>
          <div class="divider divider-horizontal"></div>
          <div class="w-1/2 grid space-y-5 px-3">
            <div class="rounded-sm p-5 flex bg-base-300 border">
              <Icon name="game-icons:character" size="30" />
              <h1 class="ml-3 text-3xl">Cechy charakteru</h1>
            </div>
            <div
              class="rounded-lg border p-5 flex bg-base-100 items-center"
              v-for="trait in traits"
            >
              <Icon :name="trait.icon" :size="`${trait.iconSize}`" />
              <div class="ml-5">
                <p class="text-lg text-left">
                  {{ trait.name }} - {{ trait.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <a
          class="btn btn-primary btn-md rounded-md px-5 gap-1 mt-2 z-10"
          href="#useful-interests"
        >
          Przydatne zainteresowania
          <Icon name="bx:down-arrow-alt" size="15" />
        </a>
      </div>
    </Hero>
    <Hero id="useful-interests" img-src="/images/blackboard.jpg">
      <div>
        <div
          class="text-white max-w-3xl grid space-y-10 border p-5 rounded-md bg-base-100/40"
        >
          <h1 class="text-3xl font-medium">
            Zainteresowania, które mogą pomóc w pracy programisty:
          </h1>
          <div class="grid space-y-4">
            <div
              class="rounded-lg border p-5 flex bg-secondary/40 items-center h-fit"
              v-for="interest in interests"
            >
              <div class="ml-5">
                <p class="text-lg text-left">
                  <span class="font-bold">{{ interest.name }}</span> -
                  {{ interest.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <a
          class="btn btn-secondary text-white btn-md rounded-md px-5 gap-1 mt-2 z-10"
          href="#how-to-get-there"
          >Jak zostać programistą?
          <Icon name="bx:down-arrow-alt" size="15" />
        </a>
      </div>
    </Hero>
    <Hero id="how-to-get-there" img-src="/images/graybg.jpg">
      <div>
        <div class="grid space-y-5 bg-base-100/40 rounded-md p-7">
          <h1 class="text-4xl">Jaką ścieżkę obrać by zostać programistą?</h1>
          <p class="text-lg">
            Jest wiele takich ścieżek, by pracować jako programista
            <span class="font-medium">nie jest</span> konieczne posiadanie
            wykształcenia. Oczywiście, pomocne jest ono w znalezieniu pracy,
            jednak zwykle nie jest kluczowe w procesie rekrutacji. Wielu
            programistów jest
            <span class="italic font-medium">self-taught</span>, czyli uczy się
            samodzielnie, korzystając z internetowych oraz książkowych źródeł.
          </p>
          <p class="text-lg">
            W Polsce jedną z popularniejszych uczelni jest Politechnika
            Wrocławska. Wśród jej kierunków znajdujeą się kierunki związane z
            programowaniem, takie jak automatyka i robotyka, czy
            cyberbezpieczeństwo. Dla tych kierunków najbardziej punktowanymi
            przedmiotami są matematyka, przedmiot dodatkowy
            (fizyka/informatyka), a niżej punktowane są język obcy i język
            polski. Wysokość opłaty rekrutacyjnej dla tych kierunków wynosi po
            <span class="whitespace-nowrap">85 zł</span>. Informacje o terminach
            rekrutacji i składania dokumentów znajdziesz
            <a
              href="https://www.otouczelnie.pl/uczelnia_dzial/4376/Politechnika-Wroclawska-rekrutacja-na-studia-20212022"
              target="_blank"
              rel="noopener noreferrer"
              class="link-secondary whitespace-nowrap"
              >tutaj</a
            >.
          </p>
          <p class="text-lg">
            Politechnika Wrocławska jest jedną z najbardziej renomowanych
            uczelni w Polsce.
            <span class="italic">
              Trzecia pozycja wśród uczelni technicznych, szóste miejsce w
              ogólnej klasyfikacji oraz tradycyjnie pierwsza lokata na Dolnym
              Śląsku - to wyniki Politechniki Wrocławskiej w rankingu szkół
              wyższych Fundacji Perspektywy 2020.
            </span>
            Bierze ona udział w wielu programach, jak Erasmus czy Student
            Exchange i więcej. Istnieje również program stypedium dla studentów
            <span class="italic font-medium whitespace-nowrap"
              >Wybitnie uzdolnieni na Politechnice Wrocławskiej</span
            >. Informacje o akademikach można znaleźć na
            <a
              href="http://drugidom.pwr.edu.pl"
              target="_blank"
              class="link-info"
              >tej stronie</a
            >.
          </p>
          <p class="text-lg">
            Więcej informacji można znaleźć na stronie
            <a
              href="https://www.rekrutacja.pwr.edu.pl/"
              target="_blank"
              rel="noopener noreferrer"
              class="link-accent whitespace-nowrap"
              >Politechniki Wrocławskiej</a
            >.<br />Istnieje oczywiście więcej uczelni w Polsce, które oferują
            kierunki związane z programowaniem, jak np. Politechnika Warszawska
            lub Politechnika Gdańska.
          </p>
          <p class="text-lg">
            Po zdobyciu odpowiednich umiejętności, można rozpocząć pracę w
            branży. Pracować jako programista można w dzisiejszych czasach w
            praktycznie każdej większej firmie, największe z nich to np. Google,
            Microsoft czy Apple. Można również pracować w mniejszych, lecz
            bardziej wyspecjalizowanych firmach. Innymi kierunkami jest
            założenie własnego start-up lub freelancing. W każdym razie -
            zapotrzebowanie na programistów jest ogromne, a wciąż ono rośnie.
          </p>
        </div>
        <a
          class="btn btn-primary text-white w-full rounded-md px-5 gap-1 mt-2 z-10"
          href="#swot-analysis"
          >Analiza SWOT<Icon name="bx:down-arrow-alt" size="15"
        /></a>
      </div>
    </Hero>
    <Hero id="swot-analysis" img-src="/images/bg2.jpg">
      <div>
        <div class="border lg:p-20 p-5 rounded-t-xl bg-base-100/80 max-w-5xl">
          <div class="text-left text-white">
            <h4 class="text-4xl mb-5 text-left">Analiza SWOT</h4>
            <p class="text-2xl text-left">
              Jest to analiza, która może pomóc w dokonaniu wyboru. Tu jest moja
              osobista analiza:
            </p>
          </div>
          <div class="mt-7">
            <img src="/images/swot.jpeg" alt="swot" class="w-full rounded-md" />
          </div>
        </div>
        <a
          class="btn text-white w-full rounded-b-md px-5 gap-1 bg-base-300/90 z-10"
          href="#for-and-against"
          >Wskazania i przeciwwskazania<Icon name="bx:down-arrow-alt" size="15"
        /></a>
      </div>
    </Hero>
    <Hero id="for-and-against" img-src="/images/bg3.jpg">
      <div>
        <div class="bg-base-100/70 rounded-lg p-7 text-white">
          <h1 class="text-6xl">Wskazania i przeciwwskazania</h1>
        </div>
        <div class="flex space-x-10 mt-10 justify-between">
          <div class="bg-base-100/70 rounded-lg p-7 text-white w-1/2">
            <Icon name="typcn:tick" size="100" />
            <ul class="list-disc ml-5 text-xl mt-5">
              <li>
                Zręczność w obsłudze sprzętu komputerowego, takiego jak myszka,
                klawiatura, monitor, etc.
              </li>
            </ul>
          </div>
          <div class="bg-base-100/70 rounded-lg p-7 text-white w-1/2">
            <Icon name="typcn:times" size="100" />
            <ul class="list-disc ml-5 text-xl mt-5">
              <li>
                Posiadanie wad fizycznych lub zdrowotnych uniemożliwiających
                zbyt długą pracę przy komputerze.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Hero>
  </main>
</template>
