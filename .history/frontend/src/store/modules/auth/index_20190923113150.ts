import { RootState, Auth } from "~/types/auth";
import { MutationTree, ActionTree, GetterTree } from "vuex";

export const state = (): RootState => ({
  auth: {
      username: '',
      isLoggedIn: false
  }
})

export const getters: GetterTree<RootState, RootState> = {
    username: (state: RootState) => {
      return state.auth.username;
    },
    isLoggedIn: (state: RootState) => {
        return state.auth.isLoggedIn;
      },
  };

export const mutations: MutationTree<RootState> = {
  setPeople(state: RootState, people: Person[]): void {
    state.people = people
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ commit }, context) {
    let people: Person[] = []

    // If you serve the site statically with `nuxt generate`, you can't use HTTP requests for local
    people = [{"id":1,"first_name":"Sebastien","last_name":"Thorsby","contact":{"email":"sthorsby0@psu.edu","phone":"1-(208)492-2543"},"gender":"Male","ip_address":"250.213.72.156","avatar":"https://robohash.org/quimodisint.png?size=200x200&set=set1","address":{"city":"Idaho Falls","country":"United States","postalCode":"83405","state":"ID","street":"9465 Utah Crossing"}},
    {"id":2,"first_name":"Neville","last_name":"Chastey","contact":{"email":"nchastey1@fema.gov","phone":"1-(205)900-8038"},"gender":"Male","ip_address":"150.45.99.76","avatar":"https://robohash.org/ducimusenimiste.bmp?size=200x200&set=set1","address":{"city":"Birmingham","country":"United States","postalCode":"35279","state":"AL","street":"38347 Springview Avenue"}},
    {"id":3,"first_name":"Nanny","last_name":"Humble","contact":{"email":"nhumble2@ft.com","phone":"1-(920)406-2490"},"gender":"Female","ip_address":"17.255.88.28","avatar":"https://robohash.org/asperioresnesciuntqui.png?size=200x200&set=set1","address":{"city":"Green Bay","country":"United States","postalCode":"54305","state":"WI","street":"2126 Towne Center"}},
    {"id":4,"first_name":"Catlee","last_name":"Fleischmann","contact":{"email":"cfleischmann3@ted.com","phone":"1-(305)383-4275"},"gender":"Female","ip_address":"107.200.202.172","avatar":"https://robohash.org/fugiatnemocorporis.jpg?size=200x200&set=set1","address":{"city":"Miami","country":"United States","postalCode":"33175","state":"FL","street":"5472 Lake View Plaza"}},
    {"id":5,"first_name":"Aida","last_name":"Entwhistle","contact":{"email":"aentwhistle4@naver.com","phone":"1-(330)770-5589"},"gender":"Female","ip_address":"75.138.16.148","avatar":"https://robohash.org/quisquamfugiatrerum.bmp?size=200x200&set=set1","address":{"city":"Akron","country":"United States","postalCode":"44315","state":"OH","street":"33 Graceland Court"}},
    {"id":6,"first_name":"Berenice","last_name":"Monkeman","contact":{"email":"bmonkeman5@goo.gl","phone":"1-(254)572-5187"},"gender":"Female","ip_address":"239.139.107.22","avatar":"https://robohash.org/facereaspernaturid.png?size=200x200&set=set1","address":{"city":"Gatesville","country":"United States","postalCode":"76598","state":"TX","street":"4 Bluestem Avenue"}},
    {"id":7,"first_name":"Addia","last_name":"Sissot","contact":{"email":"asissot6@weibo.com","phone":"1-(650)315-2520"},"gender":"Female","ip_address":"132.37.87.3","avatar":"https://robohash.org/consequaturmagniquod.jpg?size=200x200&set=set1","address":{"city":"Palo Alto","country":"United States","postalCode":"94302","state":"CA","street":"2 Buell Plaza"}},
    {"id":8,"first_name":"Alaster","last_name":"MacGauhy","contact":{"email":"amacgauhy7@livejournal.com","phone":"1-(503)820-6709"},"gender":"Male","ip_address":"78.138.78.12","avatar":"https://robohash.org/hicvoluptatemquis.jpg?size=200x200&set=set1","address":{"city":"Portland","country":"United States","postalCode":"97232","state":"OR","street":"7047 Elgar Junction"}},
    {"id":9,"first_name":"Evangelin","last_name":"Eversley","contact":{"email":"eeversley8@google.it","phone":"1-(321)163-9202"},"gender":"Female","ip_address":"2.112.50.234","avatar":"https://robohash.org/sitaeos.png?size=200x200&set=set1","address":{"city":"Orlando","country":"United States","postalCode":"32835","state":"FL","street":"21386 Straubel Circle"}},
    {"id":10,"first_name":"Anya","last_name":"Gillogley","contact":{"email":"agillogley9@mayoclinic.com","phone":"1-(334)624-9432"},"gender":"Female","ip_address":"34.207.29.205","avatar":"https://robohash.org/odioquiiure.png?size=200x200&set=set1","address":{"city":"Montgomery","country":"United States","postalCode":"36134","state":"AL","street":"8 Tony Trail"}},
]

    commit("setPeople", people.slice(0, 10))
  }
}
