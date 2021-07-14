<template>
  <div>
      <div class="text-center padding_top_80" id="step1" v-if="isStep1Visible">
  <h1 class="animate__animated animate__bounce">Quels soft skills vous définissent ?</h1>
      <p class="padding_bottom_90">Il n’y a pas de mauvaises réponses !<br>Répondez le plus spontanément possible.</p>
        <div class="hover padding_top_30">


          <v-radio-group v-for="(question, idx) in questions" :key="idx" v-model="questions[idx].score" class="text-center title background_question padding_top_30"><p>{{question.question}}</p>
        <!--       <p>{{ question.category}} {{category.find(el => el.name === question.category).finalScore * 100 / 15}}</p>-->
            <p v-if="questions.required">Il te faut au moins 3 caractères !</p>
            <div class="input_radio">
          <div style="color: #5ecfc4">Pas d'accord</div>
        <v-radio
            v-for="n in 5"
            :key="n"
            :value="n"
            @click="totalCategories"
        >
        </v-radio>
          <div>Totalement d'accord</div>
        </div>
      </v-radio-group>
        </div>

      <b-button @click="NextStepScore" class="btn_02 right margin_top_30" type="submit">Suivant
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </b-button>
      </div>

      <div id="step2" v-if="isStep2Visible" class="background_03">
        <b-container>
                <div class="row">
                  <div class="col-md-6 text-left">
                    <p class="font_dash_test">Félicitations {{ currentUserProfile.name }} ! Vous êtes ...<br></p>
                    <p class="title-border">{{ currentUserProfile.personality.personality}}</p>
                    <softskills></softskills>
                    <b-button @click="$router.push('dashboard')">Acceder au dashboard</b-button>
                  </div>
                  <div class="col-md-6">
                    <cart></cart>
                  </div>
                </div>
        </b-container>
      </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import {required} from "vuelidate/lib/validators";
import {mapState, mapActions} from 'vuex';
import Softskills from "@/components/app/softskills";
import Cart from "@/components/app/cart";
export default {
  components: {Cart, Softskills},
  data() {
    return {
      creativity: 0,
      empathy: 0,
      trust: 0,
      timeManagement: 0,
      senseCollective: 0,
      emotional: 0,
      curiosity: 0,
      adaptability: 0,
      stress: 0,
      resolution: 0,
      isStep1Visible: true,
      isStep2Visible: false,
      count: 1,
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
      questions: [
        {
          question: 'Votre esprit regorge d\'idées et de plans a explorer.',
          category: 'creativity',
          score: 0,
        },
        {
          question: 'Vous préférez créer des instructions plutôt que de les suivre.',
          category: 'creativity',
          score: 0,
        },
        {
          question: 'Vous considérez votre esprit comme plus Créatif que pratique.',
          category: 'creativity',
          score: 0,
        },
        {
          question: 'Au cours d\'un débat, il est parfois justifié de mentir pour éviter de vexer quelqu\'un.',
          category: 'empathy',
          score: 0,
        },
        {
          question: 'Vous avez des facilités à ressentir de l’empathie pour les sentiments des autres.',
          category: 'empathy',
          score: 0,
        },
        {
          question: 'Vous vous inquiétez des conséquences de vos actions sur votre entourage.',
          category: 'empathy',
          score: 0,
        },
        {
          question: 'Vous préférer être sur scène qu\'en backstage.',
          category: 'trust',
          score: 0,
        },
        {
          question: 'Vous prenez l\'initiative dans les situations sociales.',
          category: 'trust',
          score: 0,
        },
        {
          question: 'Cela ne vous dérange pas d’être le centre de l’attention.',
          category: 'trust',
          score: 0,
        },
        {
          question: 'Vous préférer travailler en continu plutôt qu\'en rush.',
          category: 'timeManagement',
          score: 0,
        },
        {
          question: 'En vacances, vous arriver a faire toutes les activités que vous aviez prévu.',
          category: 'timeManagement',
          score: 0,
        },
        {
          question: 'Au travail et au domicile, votre environnement de vie est assez ordonné.',
          category: 'timeManagement',
          score: 0,
        }, {
          question: 'Vous préférez mener un projet a plusieurs.',
          category: 'senseCollective',
          score: 0,
        },
        {
          question: 'Vous préférer les sports collectifs.',
          category: 'senseCollective',
          score: 0,
        },
        {
          question: 'Vous préférez passer vos soirées à plusieurs.',
          category: 'senseCollective',
          score: 0,
        },
        {
          question: 'Vous êtes bon pour voir vos faiblesses.',
          category: 'emotional',
          score: 0,
        },
        {
          question: 'Vous avez tendance a vous excuser pour vos erreurs.',
          category: 'emotional',
          score: 0,
        },
        {
          question: 'Vous complimentez facilement les autres.',
          category: 'emotional',
          score: 0,
        },
        {
          question: 'Vous êtes interessés par des sujets qui sorte de vos habitudes.',
          category: 'curiosity',
          score: 0,
        },
        {
          question: 'Vous aimer débattre et discuter pour le plaisir.',
          category: 'curiosity',
          score: 0,
        },
        {
          question: 'Vous passez souvent du temps à explorer des idées.',
          category: 'curiosity',
          score: 0,
        },
        {
          question: 'Ca ne vous dérange pas de faire plusieurs choses en même temps.',
          category: 'adaptability',
          score: 0,
        },
        {
          question: 'Vous avez tendance à rester concentré même lorsque les situations changent.',
          category: 'adaptability',
          score: 0,
        },
        {
          question: 'Vous ne vous laisse pas facilement impressionner.',
          category: 'adaptability',
          score: 0,
        },
        {
          question: 'Vous savez vous détendre dans des situations stressantes.',
          category: 'stress',
          score: 0,
        },
        {
          question: 'Vous vous sentez à l\'aise lors de présentation orale.',
          category: 'stress',
          score: 0,
        },
        {
          question: 'Vous avez une solution miracle pour vous apaiser avant un événement important.',
          category: 'stress',
          score: 0,
        },
        {
          question: 'Vous prenez des décisions de façon objective.',
          category: 'resolution',
          score: 0,
        },
        {
          question: 'Vous aimer comprendre les choses par vous même.',
          category: 'resolution',
          score: 0,
        },
        {
          question: 'Vous avez tendance à finir ce que vous commencer.',
          category: 'resolution',
          score: 0,
        },

      ],
      personalities: [
        {
          name: 'Licorne',
          finalScore: 0
        },
        {
          name: 'Griffon',
          finalScore: 0,
        },
        {
          name: 'Centaure',
          finalScore: 0,
        },
        {
          name: 'Kitsune',
          finalScore: 0,
        },
        {
          name: 'Phenix',
          finalScore: 0,
        },
      ]
    }

  },
  validations: {
    questions:{
      required,
    },
  },
  updated() {
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
    ...mapActions(['fetchScore']),//fetchScore
    async totalCategories() {
      await this.category.forEach((cat, idx) => {
        const temp = this.questions.filter(el => el.category === cat.name)
        const total = temp.reduce((acc, curr) => acc + curr.score, 0)
        this.category[idx].finalScore = total
        console.log(this.category[idx].finalScore)
      })
      this.totalPersonalities()
    },
    totalPersonalities() {
      const licorne = this.category[0].finalScore + this.category[1].finalScore
      this.personalities.find(el => el.name === 'Licorne').finalScore = licorne

      const griffon = this.category[2].finalScore + this.category[3].finalScore
      this.personalities.find(el => el.name === 'Griffon').finalScore = griffon

      const centaure = this.category[4].finalScore + this.category[5].finalScore
      this.personalities.find(el => el.name === 'Centaure').finalScore = centaure

      const kitsune = this.category[6].finalScore + this.category[7].finalScore
      this.personalities.find(el => el.name === 'Kitsune').finalScore = kitsune

      const phoenix = this.category[8].finalScore + this.category[9].finalScore
      this.personalities.find(el => el.name === 'Phenix').finalScore = phoenix

      const personalitiesSorted = this.personalities.sort(function (a, b) {
        return b.finalScore - a.finalScore;
      });

      this.personality = personalitiesSorted[0].name;

      console.log(personalitiesSorted)
    },


    NextStepScore() {
/*        this.questions.$touch();
        if (this.questions.$anyError) {
          return;
        }*/
      const licorne = this.category[0].finalScore + this.category[1].finalScore
      this.personalities.find(el => el.name === 'Licorne').finalScore = licorne

      const griffon = this.category[2].finalScore + this.category[3].finalScore
      this.personalities.find(el => el.name === 'Griffon').finalScore = griffon

      const centaure = this.category[4].finalScore + this.category[5].finalScore
      this.personalities.find(el => el.name === 'Centaure').finalScore = centaure

      const kitsune = this.category[6].finalScore + this.category[7].finalScore
      this.personalities.find(el => el.name === 'Kitsune').finalScore = kitsune

      const phoenix = this.category[8].finalScore + this.category[9].finalScore
      this.personalities.find(el => el.name === 'Phenix').finalScore = phoenix

      const personalitiesSorted = this.personalities.sort(function (a, b) {
        return b.finalScore - a.finalScore;
      });

      this.personality = personalitiesSorted[0].name;

      const personality = {
        personality: this.personality = personalitiesSorted[0].name,

        creativity: this.category[0].finalScore * 100 / 15,
        empathy: this.category[1].finalScore * 100 / 15,
        trust: this.category[2].finalScore * 100 / 15,
        timeManagement: this.category[3].finalScore * 100 / 15,
        senseCollective: this.category[4].finalScore * 100 / 15,
        emotional: this.category[5].finalScore * 100 / 15,
        curiosity: this.category[6].finalScore * 100 / 15,
        adaptability: this.category[7].finalScore * 100 / 15,
        stress: this.category[8].finalScore * 100 / 15,
        resolution: this.category[9].finalScore * 100 / 15,
      }



      firebase.firestore().collection("users")
          .doc(this.currentUser.uid)
          .update({
            /* score: this.category.finalScore,*/
            personality : personality
          }).then(() => {
        this.fetchScore()
        /*         this.steps.activeStep = 1*/
        /* this.registerError = ''*/
      }).catch(() => {
        /*        this.registerError = error.code;*/
      })


            if (this.count < 2) {
        this.count++;
      }
          },
  },
  computed: {
    ...mapState(['currentUser', 'currentUserProfile'])
/*        score: {
          get () {
            return this.$store.state.score
          },
          set (value) {
            this.$store.commit('updateScore', value)
          }
        }*/
  },
  watch: {
    count(value) {
      if (value === 1) {
        this.isStep1Visible = true;
        this.isStep2Visible = false;
      } else if (value === 2) {
        this.isStep1Visible = false;
        this.isStep2Visible = true;
      }
    },
  }
/*  mounted() {
    if(localStorage.category.finalScore) this.category.finalScore = localStorage.category.finalScore;
  },
  watch: {
  }*/
}
</script>

<style scoped>
.input_radio{
  display: flex;
  margin-top: 10px;
  padding: 0px;
  justify-content: center;
  align-items: center;
}
.input_radio{
  align-items: baseline;
}
.v-radio {
  padding: 15px;
}
.background_question {
  height: auto;
  width: 80%;
  margin: auto;
  padding: 15px;
  border-radius: 25px;
  margin-bottom: 40px;
  margin-top: 30px;
}
.background_03{
  background-color: #5ECFC4;
}

p {
  font-weight: normal;
  color: inherit;
  font-family: "Nunito", sans-serif;
  font-size: 18px;
}


.font_dash_test{
  font-size: 25px;
  color: white;
  margin-top: 30px;
}

.input_radio div:first-child{

}
</style>
