"use client"
import React from 'react'
import { TsIcon } from './svgs/typescript'
import { Cpp } from './svgs/cpp'
import { C } from './svgs/c'
import  ReactIcon  from './svgs/react'
import { JsIcon } from './svgs/js'
import { NextIcon } from './svgs/next'
import { RustIcon } from './svgs/rust'
import { TwLogo } from './svgs/tailwind'
import { PostMan } from './svgs/postman'
import { PostgreSQL } from './svgs/postgres'
import { Python } from './svgs/python'
import { MongoDB } from './svgs/mongoDb'
import { ExpressJs } from './svgs/express'
import { Git } from './svgs/git'
import { GitHub } from './svgs/github'
import { NodeIcon } from './svgs/node'
import { Docker } from './svgs/docker'
import { Prisma } from './svgs/prisma'
import { VercelLogo } from './svgs/vercel'
import notegenix from '../../../realNotegenix.png'
import Image from 'next/image'
import bucks from '../../../bucksbunny.png'


export const Desc = () => {
  return (
    <div>
        <div className='leading-tight'>
            <h3 className="font-bold text-[18px] text-neutral-200 mb-1 mt-4">
                About Me.
            </h3>
            <h4 className="text-neutral-300 text-[16px] leading-6 tracking-tight ">
                Yo !! I’m Daksh, a full-stack web developer in progress who enjoys building real, usable tools, not just todo apps. Learning to ship minimal and clean UIs with functional backends. Obsessed with fixing bugs I probably caused. Trying to build stuff that’s actually helpful, and maybe a little cool too. I can adapt to any tech-stack, but I’m currently into Next.js, React, Express.js, and TypeScript.
            </h4>
        </div>
        <div>
            <h3 className="font-bold text-[18px] text-neutral-200 mb-1 mt-8">
                Hire Me.
            </h3>
            <h4 className="text-neutral-300 text-[16px] leading-6 tracking-tight ">
                I’m currently open to freelance opportunities and internships. If you have a project in mind, feel free to reach out to me.
            </h4>
            <button className="mt-2 px-3 py-2 backdrop-blur-xl border border-white bg-neutral-900 hover:bg-neutral-800 text-[12px] transition duration-200 text-white rounded-md" onClick={() => window.open("mailto:thakurwanidakshh@gmail.com", "_blank")}>
                Rent a nerd
            </button>
        </div>
        <div className='mt-8'>
            <h3 className="font-bold text-[18px] text-neutral-200 mb-1">
                Dev Loadout.
            </h3>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
            <div className="mt-2 px-3 py-2 flex backdrop-blur-xl border border-white bg-neutral-900 hover:bg-neutral-800 text-[12px] transition duration-200 text-white rounded-md">
                <span className="h-5 w-5 mr-2"><JsIcon/></span>
                JavaScript
            </div>
            <div className="mt-2 px-3 py-2 flex backdrop-blur-xl border border-white bg-neutral-900 hover:bg-neutral-800 text-[12px] transition duration-200 text-white rounded-md">
               <span className="h-5 w-5 mr-2">
                    <TsIcon/>
               </span>
               TypeScript
            </div>
            <div className="mt-2 px-3 py-2 flex backdrop-blur-xl border border-white bg-neutral-900 hover:bg-neutral-800 text-[12px] transition duration-200 text-white rounded-md">
                <span className='h-5 w-5 mr-2'>
                    <TwLogo/>
                </span>
                Tailwind
            </div>
            <div className="mt-2 px-3 py-2 flex backdrop-blur-xl border border-white bg-neutral-900 hover:bg-neutral-800 text-[12px] transition duration-200 text-white rounded-md">
                <span className="h-5 w-5 mr-2"><ReactIcon/></span>
                ReactJs
            </div>
            <div className="mt-2 px-3 py-2 flex backdrop-blur-xl border border-white bg-neutral-900 hover:bg-neutral-800 text-[12px] transition duration-200 text-white rounded-md">
                <span className='h-5 w-5 mr-2'>
                    <NodeIcon/>
                </span>
                NodeJs
            </div>
            <div className="mt-2 px-3 py-2 flex backdrop-blur-xl border border-white bg-neutral-900 hover:bg-neutral-800 text-[12px] transition duration-200 text-white rounded-md">
                <span className='h-5 w-5 mr-2 bg-white rounded-full border-2'>
                    <ExpressJs/>
                </span>
                ExpressJs
            </div>
            <div className="mt-2 px-3 py-2 flex backdrop-blur-xl border border-white bg-neutral-900 hover:bg-neutral-800 text-[12px] transition duration-200 text-white rounded-md">
                <span className="h-5 w-5 mr-2 bg-white rounded-full border"><NextIcon/></span>
                NextJs
            </div>
            <div className="mt-2 px-3 py-2 flex backdrop-blur-xl border border-white bg-neutral-900 hover:bg-neutral-800 text-[12px] transition duration-200 text-white rounded-md">
               <span className="h-5 w-5 mr-2">
                    <MongoDB/>
                </span>
                MongoDB
            </div>
            <div className="mt-2 px-3 py-2 flex backdrop-blur-xl border border-white bg-neutral-900 hover:bg-neutral-800 text-[12px] transition duration-200 text-white rounded-md">
                <span className="h-5 w-5 mr-2">
                    <PostgreSQL/>
                </span>
                PostgreSQL
            </div>
            <div className="mt-2 px-3 py-2 flex backdrop-blur-xl border border-white bg-neutral-900 hover:bg-neutral-800 text-[12px] transition duration-200 text-white rounded-md">
                <span className="h-5 w-5 mr-2">
                    <Git/>
                </span>
                Git
            </div>
            <div className="mt-2 px-3 py-2 flex backdrop-blur-xl border border-white bg-neutral-900 hover:bg-neutral-800 text-[12px] transition duration-200 text-white rounded-md">
                <span className="h-5 w-5 mr-2 bg-white rounded-full border">
                    <GitHub/>
                </span>
                Github
            </div>
            <div className="mt-2 px-3 py-2 flex backdrop-blur-xl border border-white bg-neutral-900 hover:bg-neutral-800 text-[12px] transition duration-200 text-white rounded-md">
                <span className="h-5 w-5 mr-2 bg-white rounded-full">
                    <Prisma/>
                </span>
                Prisma
            </div>
            <div className="mt-2 px-3 py-2 flex backdrop-blur-xl border border-white bg-neutral-900 hover:bg-neutral-800 text-[12px] transition duration-200 text-white rounded-md">
                <span className="h-5 w-5 mr-2">
                    <PostMan/>
                </span>
                Postman
            </div>
            <div className="mt-2 px-3 py-2 flex backdrop-blur-xl border border-white bg-neutral-900 hover:bg-neutral-800 text-[12px] transition duration-200 text-white rounded-md">
                <span className="h-5 w-5 mr-2">
                    <Docker/>
                </span>
                Docker
            </div>
            <div className="mt-2 px-3 py-2 flex backdrop-blur-xl border border-white bg-neutral-900 hover:bg-neutral-800 text-[12px] transition duration-200 text-white rounded-md">
                <span className="h-5 w-5 mr-2 bg-white rounded-full">
                    <VercelLogo/>
                </span>
                Vercel
            </div>
            <div className="mt-2 px-3 py-2 flex backdrop-blur-xl border border-white bg-neutral-900 hover:bg-neutral-800 text-[12px] transition duration-200 text-white rounded-md">
                <span className="h-5 w-5 mr-2"><C/></span>
                C
            </div>
            <div className="mt-2 px-3 py-2 flex backdrop-blur-xl border border-white bg-neutral-900 hover:bg-neutral-800 text-[12px] transition duration-200 text-white rounded-md">
                <span className="h-5 w-5 mr-2"><Cpp/></span>
                C++
            </div>
            <div className="mt-2 px-3 py-2 flex backdrop-blur-xl border border-white bg-neutral-900 hover:bg-neutral-800 text-[12px] transition duration-200 text-white rounded-md">
                <span className='h-5 w-5 mr-2'>
                    <Python/>
                </span>
                Python
            </div>
            <div className="mt-2 px-3 py-2 flex backdrop-blur-xl border border-white bg-neutral-900 hover:bg-neutral-800 text-[12px] transition duration-200 text-white rounded-md">
                <span className='h-5 w-5 mr-2 bg-white rounded-full'>
                    <RustIcon/>
                </span>
                Rust
            </div>
        </div>
          <div className='mt-8'>
            <h3 className="font-bold text-[18px] text-neutral-200 mb-1">
                Projects.
            </h3>
        </div>
        <div className='mt-4 flex p-2 border border-neutral-700 rounded-lg bg-neutral-900'>
            <span>
                <Image src={notegenix} alt="NoteGenix" width={0} height={0} className='rounded-lg h-[100px] w-[150px]' />
            </span>
            <div className='ml-4  mt-2 flex flex-col'>
                <div className='flex items-center gap-2'>
                    <h1 className='text-[18px] text-neutral-200 font-bold'>NoteGenix</h1>
                    <div className='flex items-center gap-1.5 bg-green-900 px-2 ml-2 rounded-lg'>
                        <span className='h-1 w-1 rounded-full bg-green-600 animate-ping'></span>
                        <span className='text-[12px] text-green-400 tracking-relaxed'>
                            Live
                        </span>
                    </div>
                </div>
            </div>
        </div>
         <div className='mt-2 flex p-2 border border-neutral-700 rounded-lg bg-neutral-900'>
            <span>
                <Image src={bucks} alt="BucksBunny" width={0} height={0} className='rounded-lg h-[100px] w-[150px]' />
            </span>
            <div className='ml-4  mt-2 flex flex-col'>
                <div className='flex items-center gap-2'>
                    <h1 className='text-[18px] text-neutral-200 font-bold'>BucksBunny</h1>
                    <div className='flex items-center gap-1.5 bg-green-900 px-2 ml-2 rounded-lg'>
                        <span className='h-1 w-1 rounded-full bg-green-600 animate-ping'></span>
                        <span className='text-[12px] text-green-400 tracking-relaxed'>
                            Live
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
