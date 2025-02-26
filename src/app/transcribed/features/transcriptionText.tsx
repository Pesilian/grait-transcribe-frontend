'use client'

import { DarkMode } from '@/services/themeService'
import TextBox from './textBox'

export default function Transcription() {
  const isDarkMode = DarkMode()
  return (
    <div className="col-span-3 col-start-2 font-Inter overscroll-contain overflow-auto overscroll-contain">
      <TextBox content="Pariatur aliqua sunt mollit proident eu quis eiusmod Lorem fugiat est consectetur ex tempor cillum. Qui aliquip quis ut cillum aliqua esse aliquip ipsum laboris. In nostrud voluptate nulla mollit cupidatat pariatur ea fugiat ullamco irure occaecat. Labore ad laboris consequat labore ad irure ullamco ex labore aute ad tempor. Exercitation adipisicing nulla occaecat ullamco enim. Do voluptate culpa irure adipisicing culpa ex duis duis nulla officia voluptate nisi id. Adipisicing aute proident ut enim ut voluptate cupidatat." />
      <TextBox
        content="   
      Lorem dolor commodo non pariatur occaecat eu cupidatat ut. Id commodo incididunt laboris aliquip. Officia id veniam eu mollit voluptate occaecat nostrud anim ullamco aliquip ex commodo eu. Ullamco magna duis esse nulla minim consequat mollit aliquip id elit. Eu proident ullamco sunt exercitation."
      />
      <TextBox content="Excepteur quis minim non ex incididunt aute. Consequat velit ad qui esse sint in tempor eiusmod eiusmod occaecat aliqua in. Ad laborum labore cupidatat nisi nostrud quis veniam laborum fugiat veniam ut ea exercitation. Pariatur et nulla est ullamco officia. Irure ipsum aute qui proident eiusmod Lorem minim amet tempor dolore." />
      <TextBox
        content="
       Velit ea est culpa laborum enim officia aliquip qui dolore incididunt. Voluptate id nisi in magna fugiat exercitation aliquip sint minim consectetur. Duis et anim laboris ipsum dolore elit sunt fugiat veniam consequat amet magna culpa reprehenderit. Sint id deserunt in do anim ullamco. Ea est elit deserunt exercitation labore laborum laboris dolore duis ipsum exercitation laboris irure sit. Veniam enim duis aliqua incididunt anim est ullamco mollit tempor. Adipisicing nisi anim tempor esse id voluptate officia culpa duis officia."
      />
      <TextBox content="Pariatur aliqua sunt mollit proident eu quis eiusmod Lorem fugiat est consectetur ex tempor cillum. Qui aliquip quis ut cillum aliqua esse aliquip ipsum laboris. In nostrud voluptate nulla mollit cupidatat pariatur ea fugiat ullamco irure occaecat. Labore ad laboris consequat labore ad irure ullamco ex labore aute ad tempor. Exercitation adipisicing nulla occaecat ullamco enim. Do voluptate culpa irure adipisicing culpa ex duis duis nulla officia voluptate nisi id. Adipisicing aute proident ut enim ut voluptate cupidatat." />
      <TextBox
        content="   
      Lorem dolor commodo non pariatur occaecat eu cupidatat ut. Id commodo incididunt laboris aliquip. Officia id veniam eu mollit voluptate occaecat nostrud anim ullamco aliquip ex commodo eu. Ullamco magna duis esse nulla minim consequat mollit aliquip id elit. Eu proident ullamco sunt exercitation."
      />
      <TextBox content="Excepteur quis minim non ex incididunt aute. Consequat velit ad qui esse sint in tempor eiusmod eiusmod occaecat aliqua in. Ad laborum labore cupidatat nisi nostrud quis veniam laborum fugiat veniam ut ea exercitation. Pariatur et nulla est ullamco officia. Irure ipsum aute qui proident eiusmod Lorem minim amet tempor dolore." />
      <TextBox
        content="
         Velit ea est culpa laborum enim officia aliquip qui dolore incididunt. Voluptate id nisi in magna fugiat exercitation aliquip sint minim consectetur. Duis et anim laboris ipsum dolore elit sunt fugiat veniam consequat amet magna culpa reprehenderit. Sint id deserunt in do anim ullamco. Ea est elit deserunt exercitation labore laborum laboris dolore duis ipsum exercitation laboris irure sit. Veniam enim duis aliqua incididunt anim est ullamco mollit tempor. Adipisicing nisi anim tempor esse id voluptate officia culpa duis officia."
      />
      <div
        className={`absolute bottom-0 left-0 w-full h-40 ${isDarkMode ? 'bg-gradient-bl' : 'bg-gradient'}`}
      ></div>
    </div>
  )
}
