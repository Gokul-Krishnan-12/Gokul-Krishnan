'use client'
import Character from '@/utils/Character';
import styles from './page.module.scss'
import { useState, useEffect } from 'react';
import Scene from '@/components/Scene';
import Contact from '@/components/Contact';

export default function Test() {

  return (
   
    <main className="">
    <div className="absolute items-start leading-tight">
      <Contact/>
      <Scene />
    </div>
   
  </main>
  )
}