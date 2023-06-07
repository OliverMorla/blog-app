"use client"

import React, { useEffect, useState } from 'react';
import { useGlobal } from '@/app/context/GlobalContext';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import "./page.scss"

const Create = () => {
    const { createBlog } = useGlobal()

    const { quill, quillRef } = useQuill();

    const [ input, setInput ] = useState({title: "", description: "", photourl: "", date: "", category: ""})

    const handleInput = async (e) => {
        setInput({...input, [e.target.name]: e.target.value})
    }

    const handleCreate = async () => {
        try {
            const res = await createBlog(input)
            console.log(res)
        } catch (err) {
            console.log(err)
        }
    }

    const handleDraft = async () => {
        try {

        } catch (err) {

        }
    }
    const currentDate = () => {
        let currentYear, currentMonth, currentDay, currentTime;

        const date = new Date()
        currentYear = date.getFullYear()
        currentMonth = date.getMonth() + 1;
        currentDay = date.getDate();
        currentTime = date.toUTCString().split(" ")

        return { currentYear, currentMonth, currentDay, currentTime };
    }

    const { currentYear, currentMonth, currentDay, currentTime } = currentDate();

    useEffect(() => {
        if (quill) {
            quill.on('text-change', (delta, oldDelta, source) => {
                setInput(prevInput => ({...prevInput, description: quill.root.innerHTML}))
                console.log(quill.root.innerHTML) // quill.root.innerHTML has the HTML of the editor
            });
        }
    }, [quill]);

    useEffect(() => {
        setInput({...input, date: `${currentYear}-${currentMonth}-${currentDay} ${currentTime[4]}`})
    }, [])

    console.log(input)

    return (
        <div className="container">
            <div className="editor-w">
                <input
                    type="text"
                    name="title"
                    placeholder='Enter the title'
                    className='create-title-input'
                    onChange={handleInput}
                />
                <div ref={quillRef} onChange={handleInput}/>
            </div>
            <div className="sidebar-w">
                <div className="status">Status: Draft</div>
                <div className="visibility">Visibility: Public</div>
                <div className="date">{`${currentYear}-${currentMonth}-${currentDay} ${currentTime[4]}`}</div>
                <div className="btn-w">
                    <select name="category" id="category-w" onChange={handleInput}>
                        <option value="">Select a Category</option>
                        <option value="School">School</option>
                        <option value="Technology">Technlogy</option>
                        <option value="Science">Science</option>
                        <option value="Politics">Politics</option>
                        <option value="Math">Math</option>
                    </select>
                    <button id="draft" onClick={handleDraft}>Save as a draft</button>
                    <button id="create" onClick={handleCreate}>Create/Update</button>
                </div>
            </div>
        </div>
    );
}

export default Create;