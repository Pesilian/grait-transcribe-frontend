import FormLink from './formLink'

export default function AboutUs() {
  return (
    <div className="justify-self-start self-center">
      <h2 className=" font-black text-5xl mb-4">GR Transcripion</h2>
      <p className="font-Roboto text-base/7  w-5/6">
        Vår AI-drivna transkriberingstjänst använder den senaste teknologin för
        att omvandla tal till text med hög precision. Tjänsten är designad för
        att hantera olika accenter, bakgrundsljud och talhastigheter, vilket gör
        den perfekt för ett brett spektrum av användningsområden.
      </p>
      <p className="font-Roboto text-base/7 mt-4 w-5/6">
        Oavsett om du behöver transkribera intervjuer, föreläsningar, möten
        eller podcasts, så kan vår AI ge dig en pålitlig och tidsbesparande
        lösning för att skapa exakta transkriptioner. Upplev enkelheten i att få
        dina ljudfiler omvandlade till text på några minuter!
      </p>
      <FormLink />
    </div>
  )
}
