<template>
  <div>

    <v-container
        class="px-0 text-center"
    >
      <v-radio-group v-for="(question, idx) in questions" :key="idx" v-model="questions[idx].score">
        <p>{{question.question}}</p>
        <v-radio
            v-for="n in 5"
            :key="n"
            :value="n"
        ></v-radio>
      </v-radio-group>
      <h1>{{personality}}</h1>
    </v-container>

  </div>
</template>

<script>
export default {
data(){
  return{
    category: [
      {
        name: 'creativity',
        finalScore: 0
      },
      {
        name: 'empathy',
        finalScore: 0
      },
      {
        name: 'trust',
        finalScore: 0
      },
      {
        name: 'timeManagement',
        finalScore: 0
      },
      {
        name: 'senseCollective',
        finalScore: 0
      },
      {
        name: 'emotional',
        finalScore: 0
      },
      {
        name: 'curiosity',
        finalScore: 0
      },
      {
        name: 'adaptability',
        finalScore: 0
      },
      {
        name: 'stress',
        finalScore: 0
      },
      {
        name: 'resolution',
        finalScore: 0
      },
    ],
    personality: '',
    questions:[
      {
        question:'Votre esprit regorge d\'idées et de plans a explorer.',
        category:'creativity',
        score: 0,
      },
      {
        question:'Vous préférez créer des instructions plutôt que de les suivre.',
        category:'creativity',
        score: 0,
      },
      {
        question: 'Vous considérez votre esprit comme plus Créatif que pratique.',
        category: 'creativity',
        score: 0,
      },
      {
        question:'Au cours d\'un débat, il est parfois justifié de mentir pour éviter de vexer quelqu\'un.',
        category:'empathy',
        score: 0,
      },
      {
        question:'Vous avez des facilités à ressentir de l’empathie pour les sentiments des autres.',
        category:'empathy',
        score: 0,
      },
      {
        question:'Vous vous inquiétez des conséquences de vos actions sur votre entourage.',
        category:'empathy',
        score: 0,
      },
      {
        question:'Vous préférer être sur scène qu\'en backstage.',
        category:'trust',
        score: 0,
      },
      {
        question:'Vous prenez l\'initiative dans les situations sociales.',
        category:'trust',
        score: 0,
      },
      {
        question:'Cela ne vous dérange pas d’être le centre de l’attention.',
        category:'trust',
        score: 0,
      },
      {
        question:'Vous préférer travailler en continu plutôt qu\'en rush.',
        category:'timeManagement',
        score: 0,
      },
      {
        question:'En vacances, vous arriver a faire toutes les activités que vous aviez prévu.',
        category:'timeManagement',
        score: 0,
      },
      {
        question:'Au travail et au domicile, votre environnement de vie est assez ordonné.',
        category:'timeManagement',
        score: 0,
      },      {
        question:'Vous préférez mener un projet a plusieurs.',
        category:'senseCollective',
        score: 0,
      },
      {
        question:'Vous préférer les sports collectifs.',
        category:'senseCollective',
        score: 0,
      },
      {
        question:'Vous préférez passer vos soirées à plusieurs.',
        category:'senseCollective',
        score: 0,
      },
      {
        question:'Vous êtes bon pour voir vos faiblesses.',
        category:'emotional',
        score: 0,
      },
      {
        question:'Vous avez tendance a vous excuser pour vos erreurs.',
        category:'emotional',
        score: 0,
      },
      {
        question:'Vous complimentez facilement les autres.',
        category:'emotional',
        score: 0,
      },
      {
        question:'Vous êtes interessés par des sujets qui sorte de vos habitudes.',
        category:'curiosity',
        score: 0,
      },
      {
        question:'Vous aimer débattre et discuter pour le plaisir.',
        category:'curiosity',
        score: 0,
      },
      {
        question:'Vous passez souvent du temps à explorer des idées.',
        category:'curiosity',
        score: 0,
      },
      {
        question:'Ca ne vous dérange pas de faire plusieurs choses en même temps.',
        category:'adaptability',
        score: 0,
      },
      {
        question:'Vous avez tendance à rester concentré même lorsque les situations changent.',
        category:'adaptability',
        score: 0,
      },
      {
        question:'Vous ne vous laisse pas facilement impressionner.',
        category:'adaptability',
        score: 0,
      },
      {
        question:'Vous savez vous détendre dans des situations stressantes.',
        category:'stress',
        score: 0,
      },
      {
        question:'Vous vous sentez à l\'aise lors de présentation orale.',
        category:'stress',
        score: 0,
      },
      {
        question:'Vous avez une solution miracle pour vous apaiser avant un événement important.',
        category:'stress',
        score: 0,
      },
      {
        question:'Vous prenez des décisions de façon objective.',
        category:'resolution',
        score: 0,
      },
      {
        question:'Vous aimer comprendre les choses par vous même.',
        category:'resolution',
        score: 0,
      },
      {
        question:'Vous avez tendance à finir ce que vous commencer.',
        category:'resolution',
        score: 0,
      },

    ],
    personalities: [
      {
        name:'Licorne',
        finalScore: 0
      },
      {
        name:'Griffon',
        finalScore: 0,
      },
      {
        name:'Centaure',
        finalScore: 0,
      },
      {
        name:'Kitsune',
        finalScore: 0,
      },
      {
        name:'Phoenix',
        finalScore: 0,
      },
    ]
  }
},
  updated() {
    this.totalCategories()

    /*const creativity = this.questions.filter(el => el.category === 'creativity')
    const totalCreativity = creativity.reduce((acc, curr) => acc + curr.score, 0)
    this.category[0].finalScore = totalCreativity
/!*    console.log(totalCreativity)*!/

    const empathy = this.questions.filter(el => el.category === 'empathy')
    const totalEmpathy = empathy.reduce((acc, curr) => acc + curr.score, 0)
    this.category[1].finalScore = totalEmpathy
    /!*console.log(totalEmpathy)*!/

    const trust = this.questions.filter(el => el.category === 'trust')
    const totalTrust = trust.reduce((acc, curr) => acc + curr.score, 0)
    this.category[2].finalScore = totalTrust

    const timeManagement = this.questions.filter(el => el.category === 'timeManagement')
    const totalTimeManagement = timeManagement.reduce((acc, curr) => acc + curr.score, 0)
    this.category[3].finalScore = totalTimeManagement

    const senseCollective = this.questions.filter(el => el.category === 'senseCollective')
    const totalSenseCollective = senseCollective.reduce((acc, curr) => acc + curr.score, 0)
    this.category[4].finalScore = totalSenseCollective

    const emotional = this.questions.filter(el => el.category === 'emotional')
    const totalEmotional = emotional.reduce((acc, curr) => acc + curr.score, 0)
    this.category[5].finalScore = totalEmotional

    const curiosity = this.questions.filter(el => el.category === 'curiosity')
    const totalCuriosity = curiosity.reduce((acc, curr) => acc + curr.score, 0)
    this.category[6].finalScore = totalCuriosity

    const adaptability = this.questions.filter(el => el.category === 'adaptability')
    const totalAdaptability = adaptability.reduce((acc, curr) => acc + curr.score, 0)
    this.category[7].finalScore = totalAdaptability

    const stress = this.questions.filter(el => el.category === 'stress')
    const totalStress = stress.reduce((acc, curr) => acc + curr.score, 0)
    this.category[8].finalScore = totalStress

    const resolution = this.questions.filter(el => el.category === 'resolution')
    const totalResolution = resolution.reduce((acc, curr) => acc + curr.score, 0)
    this.category[9].finalScore = totalResolution




/*    const personalitiesSorted = this.personalities.sort(function(a, b) {
      return a.finalScore - b.finalScore;
    });

    console.log(personalitiesSorted)

    /!*    console.log(personalitiesSorted)*!/

    this.personality = personalitiesSorted[0].name*/

 /*   const temp = this.category.sort(function(a, b) {
          return a - b;
        });



    if(temp[0].name === 'creativity'){
      this.personality = 'Griffon'
    }else if (temp[0].name === 'empathy'){
      this.per
    }
*/


  },
  methods: {
    async totalCategories(){
      await this.category.forEach((cat, idx) => {
        const temp = this.questions.filter(el => el.category === cat.name)
        const total = temp.reduce((acc, curr) => acc + curr.score, 0)
        this.category[idx].finalScore = total
      })
      this.totalPersonalities()
    },
    totalPersonalities(){

      const licorne = this.category[0].finalScore + this.category[1].finalScore
      console.log(licorne)
      this.personalities[0].finalScore = licorne

      const griffon = this.category[2].finalScore + this.category[3].finalScore
      this.personalities[1].finalScore = griffon

      const centaure = this.category[4].finalScore + this.category[5].finalScore
      this.personalities[2].finalScore = centaure

      const kitsune = this.category[6].finalScore + this.category[7].finalScore
      this.personalities[3].finalScore = kitsune

      const phoenix = this.category[8].finalScore + this.category[9].finalScore
      this.personalities[4].finalScore = phoenix

      const personalitiesSorted = this.personalities.sort(function(a, b) {
        return a.finalScore - b.finalScore;
      });

      this.personality = personalitiesSorted[0].name

      console.log(personalitiesSorted)
    }
  }
}
</script>
