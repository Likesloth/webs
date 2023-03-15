import { create } from 'zustand'


type StateType = {
   bears: number;
   users: {};
   increase: Function;
   fetchUser: Function;
}


// === Create store ===
const store = (set: Function) => ({
   bears: 10,
   users: {},
   increase: () => set((state: StateType) => ({ bears: state.bears + 1 })),
   fetchUser: async (url: string) => {
       const res = await fetch(url)
       set({ users: (await res.json()).results[0] })
   },
})

const useBearStore = create(store)


export default function Zustand() {
   // ===  Use store ===
   const bears = useBearStore(state => state.bears)
   const users = useBearStore(state => state.users)
   const increase = useBearStore(state => state.increase)
   const fetchUser = useBearStore(state => state.fetchUser)
   return (
       <>
           <h1>Zustand demo</h1>
           <p>Use store {bears} </p>
           <button className='border-2 border-black'
               onClick={increase}
           >Increase</button>
           <button className='border-2 border-black'
               onClick={() => {
                   fetchUser(`https://randomuser.me/api/`)
                   JSON.stringify(users) !== '{}' &&
                       console.log("Users: ", users)
               }}
           >fetchUser</button>
       </>
   )
}
import { persist } from 'zustand/middleware'


// === Create store ===
const store = persist(
   (set: Function) => ({
       bears: 10,
       users: {},
       increase: () => set((state: StateType) => ({ bears: state.bears + 1 })),
       fetchUser: async (url: string) => {
           const res = await fetch(url)
           set({ users: (await res.json()).results[0] })
       },
   }),
   {
       name: 'bear-storage',
   }
)


