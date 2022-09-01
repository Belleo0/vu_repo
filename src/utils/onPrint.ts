import { useState, useEffect, useRef } from 'react';

export function onPrint() {
  const divRef = useRef<HTMLDivElement>(null);

  const handleOnPrint = () => {
    const html = document.querySelector('html');

    if (divRef.current === null) return;

    const printContents = divRef.current.innerHTML;
    const printDiv = document.createElement('DIV');
    console.log('printDiv', printDiv);
    printDiv.className = 'div';

    if (html === null) return;

    html.appendChild(printDiv);
    printDiv.innerHTML = printContents;
    document.body.style.display = 'none';
    window.print();
    document.body.style.display = 'block';
    printDiv.style.display = 'none';
  };

  return {
    divRef,
    handleOnPrint,
  };
}
