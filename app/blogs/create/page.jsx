"use client"

import React, { useEffect, useState } from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import "./page.scss"

const Create = () => {
    const { quill, quillRef } = useQuill();

    const [selectedValue, setSelectedValue] = useState('')
    const [blogTitle, setBlogTitle] = useState('')

    const createBlog = async () => {
        try {

        } catch (err) {

        }
    }

    const draftBlog = async () => {
        try {

        } catch (err) {

        }
    }

    const selectCategory = async (e) => {
        setSelectedValue(e.target.value)

        // console.log(e.target.value) // This is the value of the selected option
    }

    useEffect(() => {
        if (quill) {
            quill.on('text-change', (delta, oldDelta, source) => {

                // console.log(quill.root.innerHTML) // quill.root.innerHTML has the HTML of the editor
            });
        }
    }, [quill]);

    const currentDate = () => {
        let currentYear, currentMonth, currentDay, currentTime;

        const date = new Date()
        currentYear = date.getFullYear()
        currentMonth = date.getMonth() + 1;
        currentDay = date.getDate();
        currentTime = date.toUTCString().split(" ")

        return { currentYear, currentMonth, currentDay, currentTime };
    }

    const { currentYear, currentMonth, currentDay, currentTime } = currentDate()

    return (
        <div className="container">
            <div className="editor-w">
                <input
                    type="text"
                    name="title"
                    placeholder='Enter the title'
                    className='create-title-input'
                    onChange={(e) => setBlogTitle(e.target.value)}
                />
                <div ref={quillRef} />
            </div>
            <div className="sidebar-w">
                <div className="status">Status: Draft</div>
                <div className="visibility">Visibility: Public</div>
                <div className="date">{`${currentYear}-${currentMonth}-${currentDay} ${currentTime[4]}`}</div>
                <div className="btn-w">
                    <select name="categories" id="category-w" onChange={selectCategory}>
                        <option value="">Select a Category</option>
                        <option value="School">School</option>
                        <option value="Technology">Technlogy</option>
                        <option value="Science">Science</option>
                        <option value="Politics">Politics</option>
                        <option value="Math">Math</option>
                    </select>
                    <button id="draft" onClick={draftBlog}>Save as a draft</button>
                    <button id="create" onClick={createBlog}>Create/Update</button>
                </div>
            </div>
        </div>
    );
}

export default Create;