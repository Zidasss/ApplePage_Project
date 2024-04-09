import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            Mais jeitos de comprar: {' '}
            <span className="underline text-blue">
            Encontre na Apple Store {' '}
            </span>
            ou {' '}
            <span className="underline text-blue">
            outros revendedores
            </span>{' '}
            perto de você.
          </p>
          <p className="font-semibold text-gray text-xs">
            ou ligue 4002-8922
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">Developed by Gustavo Zavadniak as a study case.</p>
          <div className="flex flex-wrap">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}{' '}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer