import React from 'react';
import ReactDOM from 'react-dom'
import { Cont, Bttn } from './Component.elements'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf';
import App from '../App'

export default function Component() {
  const printDoc = () => {
    const input = document.getElementById('printRender')

    ReactDOM.render(<App />, input, () => {

      console.log(input)

      html2canvas(input)
        .then((canvas) => {

          console.log(canvas)

          let imgWidth = 208;
          let imgHeight = canvas.height * imgWidth / canvas.width

          const imgData = canvas.toDataURL()

          const pdf = new jsPDF('p', 'mm', 'a4')

          pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight)

          pdf.save('download.pdf')

          ReactDOM.unmountComponentAtNode(input)
      })

    })
    
  }

    return <Cont>
      <Bttn onClick={() => printDoc()}>Save as PDF</Bttn>
  </Cont>;
}


