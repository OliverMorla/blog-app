"use client"

import React, { useEffect, useState } from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import "./page.scss"

const Create = () => {
    const { quill, quillRef } = useQuill();
    const [content, setContent] = useState('');

    useEffect(() => {
        if (quill) {
            quill.on('text-change', () => {
                setContent(quill.getContents());
            });
        }
    }, [quill])

    return (
        <div className="container">
            <div className="editor-w">
                <input type="text" name="title" id="title" placeholder='Title' className='create-title-input' />
                <div className="editor" ref={quillRef} />
            </div>
            <div className="sidebar-w">
                <div className="status">Status: Draft</div>
                <div className="visibility">Visibility: Public</div>
                <div className="btn-w">
                    <button id="draft">Save as a draft</button>
                    <button id="create">Create/Update</button>
                </div>
            </div>
        </div>
    );
}

export default Create;