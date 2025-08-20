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
import { LinkIcon } from './svgs/link'
import { NotegenixGithub } from './svgs/NotegenixGithub'
import { BucksBunnyGithub } from './svgs/bucksBunnyGithub'
import { BucksBunny } from './svgs/bucksbunny'
import { Xcom } from './svgs/X'
import { Mail } from './svgs/mail'
import { MyGithub } from './svgs/githubIcon'
import { LinkedIn } from './svgs/linked'




export const Desc = () => {
  return (
    <div>
        <div className='leading-tight'>
            <h3 className="font-bold text-[16px] sm:text-[18px] text-neutral-200 mb-1 mt-4">
                About Me.
            </h3>
            <h4 className="text-neutral-300 text-[14px] sm:text-[16px] leading-6 tracking-tight ">
                Yo !! I’m Dakshh, a full-stack web developer in progress who enjoys building real, usable tools, not just todo apps. Learning to ship minimal and clean UIs with functional backends. Obsessed with fixing bugs I probably caused. Trying to build stuff that’s actually helpful, and maybe a little cool too. I can adapt to any tech-stack, but I’m currently into Next.js, React, Express.js, and TypeScript.
            </h4>
        </div>
        <div>
            <h3 className="font-bold text-[16px] sm:text-[18px] text-neutral-200 mb-1 mt-8">
                Hire Me.
            </h3>
            <h4 className="text-neutral-300 text-[14px] sm:text-[16px] leading-6 tracking-tight ">
                I’m currently open to freelance opportunities and internships. If you have a project in mind, feel free to reach out to me.
            </h4>
            <button className="mt-2 px-3 py-2 backdrop-blur-xl border border-white bg-neutral-900 hover:bg-neutral-800 text-[12px] transition duration-200 text-white cursor-pointer rounded-md" onClick={() => window.open("mailto:thakurwanidakshh@gmail.com", "_blank")}>
                Rent a nerd
            </button>
        </div>
        <div className='mt-8'>
            <h3 className="font-bold text-[16px] sm:text-[18px] text-neutral-200 mb-1">
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
            <h3 className="font-bold text-[16px] sm:text-[18px] text-neutral-200 mb-1">
                Projects.
            </h3>
        </div>
        <div className='mt-4 flex flex-col sm:flex-row p-2 border border-neutral-700 rounded-lg bg-neutral-900 sm:h-[150px] w-full hover:bg-neutral-800'>
            <span className='flex justify-center items-center sm:w-auto w-full mb-3 sm:mb-0'>
                <Image src={notegenix} alt="NoteGenix" width={150} height={100} className='rounded-lg h-[125px] w-full sm:w-[200px] md:w-[560px] object-cover' />
            </span>
            <div className='sm:ml-4 mt-2 flex flex-col'>
                <div className='flex flex-col sm:flex-row sm:items-center gap-2'>
                    <div className='flex items-center gap-2'>
                        <h1 className='text-[16px] sm:text-[18px] text-neutral-200 font-bold'>NoteGenix</h1>
                        <div className='flex items-center gap-1.5 bg-green-900 px-2 rounded-lg'>
                            <span className='h-1 w-1 rounded-full bg-green-600 animate-ping'></span>
                            <span className='text-[12px] text-green-400 tracking-relaxed'>
                                Live
                            </span>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span className=''>
                            <LinkIcon/>
                        </span>
                        <span className=''>
                            <NotegenixGithub/>
                        </span>
                    </div>
                </div>
                <div className='text-neutral-300 text-[11px] sm:text-[12px] mt-2'>
                    <p>
                        NoteGenix is a smart note-sharing and management platform for students and educators.
                        Easily upload, organize, and access study materials like PDFs, slides, and handwritten notes.
                        It&apos;s designed to simplify academic collaboration and make learning resources instantly accessible.
                    </p>
                </div>
            </div>
        </div>
                  <div className='mt-2 flex flex-col sm:flex-row p-2 border border-neutral-700 rounded-lg bg-neutral-900 hover:bg-neutral-800'>
            <span className='flex items-center justify-center sm:w-auto w-full mb-3 sm:mb-0'>
                <Image src={bucks} alt="BucksBunny" width={150} height={100} className='rounded-lg h-[110px] w-full sm:w-[200px] md:w-[550px] object-cover' />
            </span>
            <div className='sm:ml-4 mt-2 flex flex-col'>
                <div className='flex flex-col sm:flex-row sm:items-center gap-2'>
                    <div className='flex items-center gap-2'>
                        <h1 className='text-[16px] sm:text-[18px] text-neutral-200 font-bold'>BucksBunny</h1>
                        <div className='flex items-center gap-1.5 bg-green-900 px-2 rounded-lg'>
                            <span className='h-1 w-1 rounded-full bg-green-600 animate-ping'></span>
                            <span className='text-[12px] text-green-400 tracking-relaxed'>
                                Live
                            </span>
                        </div>
                    </div>
                     <div className='flex items-center gap-2'>
                        <span className=''>
                            <BucksBunny/>
                        </span>
                        <span className=''>
                            <BucksBunnyGithub/>
                        </span>
                    </div>
                </div>
                <div>
                    <p className='text-neutral-300 text-[11px] sm:text-[12px] mt-2'>
                        Bucks Bunny is a lightweight SaaS tool built for freelancers to manage their finances with ease.
                            Track your income, generate invoices instantly, and view detailed monthly income summaries.
                            It&apos;s a simple yet powerful dashboard to help you stay financially organized and professional.
                    </p>
                </div>
            </div>
        </div>
        <div>
            <h3 className="font-bold text-[16px] sm:text-[18px] text-neutral-200 mb-1 mt-8">
                Ping me anytime.
            </h3>
            <h4 className="text-neutral-300 text-[14px] sm:text-[16px] mt-2 leading-6 tracking-tight ">
                Feel free to reach out to me on any of the platforms below. I’m always open to discussing new projects, ideas, or just having a chat about tech. I am super active on X (formerly Twitter), so don’t hesitate to drop me a message there!
            </h4>
           <div className='flex flex-col sm:flex-row gap-3 mt-2'>
                <button className="mt-2 px-3 py-2 flex justify-center items-center backdrop-blur-xl border border-white bg-neutral-900 hover:bg-neutral-800 text-[12px] gap-2  cursor-pointer transition duration-200 text-white rounded-md" onClick={() => window.open("https://x.com/offsidedebugger", "_blank")} >
                <span className='h-5 w-5 flex justify-center items-center'>
                    <Xcom/>
                </span>
                Twitter
                </button>
                 <button className="mt-2 px-3 py-2 flex justify-center items-center backdrop-blur-xl border border-white bg-neutral-900 hover:bg-neutral-800 text-[12px] gap-2 transition cursor-pointer duration-200 text-white rounded-md" onClick={() => window.open("mailto:thakurwanidakshh@gmail.com", "_blank")} >
                <span className='h-5 w-5 flex justify-center items-center'>
                    <Mail/>
                </span>
                Mail
                </button>
           </div>
        </div> 
        <div>
            <span className='w-full border border-neutral-400 bg-neutral-900 mt-8 block'>
            </span>
        </div>
        <div className='mt-8 flex justify-center items-center'>
            <div className='flex items-center justify-center gap-4 sm:gap-8'> 
                <span className='h-10 w-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-neutral-800'>
                    <Mail/>
                </span>
                <span className='h-10 w-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-neutral-800'>
                    <MyGithub/>
                </span>
                <span className='h-10 w-10 rounded-full  flex justify-center items-center cursor-pointer hover:bg-neutral-800'>
                    <Xcom/>
                </span>
                  <span className=' h-10 w-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-neutral-800' onClick={() => window.open("https://www.linkedin.com/in/dakshh-thakurwani-59673a347/", "_blank")}>
                    <LinkedIn/>
                </span>
            </div>
        </div>
        <div className='flex items-center justify-center px-4'>
                <p className="text-xs sm:text-sm mt-2 text-neutral-400 text-center">© 2025 Dakshh. All rights reserved.</p>
        </div>
    </div>
  )
}
