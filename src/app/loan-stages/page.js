'use client';

import Layout from '@/components/Layout';  // ✅ Import Layout
import LeftMenu from '@/components/LeftMenu';
import { useState } from "react";
import { Pencil, Trash, Plus } from 'lucide-react';

export default function LoanStages() {
    const [templates, setTemplates] = useState([
        {
            title: "Personal Loan",
            stages: ["Lead", "Registered", "Approved", "Disbursed", "Rejected"],
            isEditing: false,
        }
    ]);

    const [newTemplate, setNewTemplate] = useState(null);

    const handleToggleEdit = (index) => {
        const updatedTemplates = [...templates];
        updatedTemplates[index].isEditing = !updatedTemplates[index].isEditing;
        setTemplates(updatedTemplates);
    };

    const handleTemplateTitleChange = (index, value) => {
        const updatedTemplates = [...templates];
        updatedTemplates[index].title = value;
        setTemplates(updatedTemplates);
    };

    const handleAddStage = (index, newStage) => {
        if (newStage.trim() === "") return;
        const updatedTemplates = [...templates];
        updatedTemplates[index].stages.push(newStage);
        setTemplates(updatedTemplates);
    };

    const handleRemoveStage = (templateIndex, stageIndex) => {
        const updatedTemplates = [...templates];
        updatedTemplates[templateIndex].stages.splice(stageIndex, 1);
        setTemplates(updatedTemplates);
    };

    const handleAddNewTemplate = () => {
        setNewTemplate({
            title: "New Template",
            stages: [],
            isEditing: true,
        });
    };

    const handleSaveNewTemplate = () => {
        if (newTemplate) {
            setTemplates([...templates, newTemplate]);
            setNewTemplate(null);
        }
    };

    return (
        <Layout>
            <div className="flex h-screen">
             

                <div className="flex flex-col w-full">
                    {/* Header */}
                    <div className="bg-white shadow-md flex justify-between items-center px-6 py-2.5 ml-60"
                    style={{margin:'0.5px'}}>
                        <h4 className="text-lg font-semibold text-gray-800">Loan Stage Configuration</h4>
                    </div>

                    <div className="flex-grow p-6 bg-gray-100">
                        <div className="flex">
                            <LeftMenu />

                            <div className="flex-grow bg-white rounded-lg shadow p-6">
                                <h3 className="text-xl font-semibold">Loan Stages</h3>
                                <p className="text-gray-600">Configure loan processing stages based on your requirements.</p>
                                <hr className="my-4" />

                            {/* Existing Templates */}
                            <div className="mb-6 w-2/4 p-6">
                                <h3 className="text-lg font-semibold mb-2">Existing Templates</h3>
                                {templates.map((template, index) => (
                                    <div key={index} className="bg-white p-6 rounded-lg shadow-md w-full min-h-[95px] mb-6 flex flex-col">
                                        <div className="flex items-center justify-between">
                                            {template.isEditing ? (
                                                <input
                                                    type="text"
                                                    value={template.title}
                                                    onChange={(e) => handleTemplateTitleChange(index, e.target.value)}
                                                    className="text-lg font-semibold border border-gray-300 p-1 rounded w-full"
                                                />
                                            ) : (
                                                <h4 className="text-lg font-semibold">{template.title}</h4>
                                            )}

                                            <button onClick={() => handleToggleEdit(index)}>
                                                <Pencil className="text-blue-500 w-4 h-6" />
                                            </button>
                                        </div>

                                        <div className="mt-3 space-y-2">
                                            {template.stages.map((stage, stageIndex) => (
                                                <div key={stageIndex} className="flex items-center justify-between bg-gray-100 p-2 rounded-lg">
                                                    <input
                                                        type="text"
                                                        value={template.title}
                                                        onChange={(e) => handleTemplateTitleChange(index, e.target.value)}
                                                        className="text-lg font-semibold border border-gray-300 p-2 rounded w-full"
                                                    />
                                                    {template.isEditing && (
                                                        <button
                                                            onClick={() => handleRemoveStage(index, stageIndex)}
                                                            className="text-red-500 ml-2"
                                                        >       <img src="-button.png" alt="Back" className="w-7 h-6 mr-2" />

                                                        </button>
                                                    )}
                                                </div>
                                            ))}

                                            {/* Add New Stage Input */}
                                            {template.isEditing && (
                                                <div className="flex items-center bg-gray-100 p-2 rounded-lg">
                                                    <input
                                                        type="text"
                                                        placeholder="New Stage"
                                                        className="bg-transparent outline-none w-full"
                                                        onKeyDown={(e) => {
                                                            if (e.key === "Enter") {
                                                                handleAddStage(index, e.target.value);
                                                                e.target.value = "";
                                                            }
                                                        }}
                                                    />
                                                    <button
                                                        onClick={(e) => {
                                                            const input = e.target.closest("div").querySelector("input");
                                                            if (input && input.value.trim() !== "") {
                                                                handleAddStage(index, input.value);
                                                                input.value = "";
                                                            }
                                                        }}
                                                        className="text-blue-500 ml-2"
                                                    >
                                                        <img src="+button.png" alt="Add" className="w-7 h-6 mr-2" />
                                                    </button>

                                                </div>
                                            )}
                                        </div>

                                        {/* Save Changes Button */}
                                        {template.isEditing && (
                                            <div className="flex justify-end mt-4">
                                                <button
                                                    className="bg-green-500 text-white px-4 py-2 rounded"
                                                    onClick={() => handleToggleEdit(index)}
                                                >
                                                    Save Changes
                                                </button>
                                            </div>


                            {/* Add New Template Section */}
                            <div className="mb-6 w-3/4 p-6">
                                <h3 className="text-lg font-semibold mb-2">Custom Template</h3>
                                <div className="flex gap-4">
                                    <div
                                        className="border-2 border-dashed border-gray-400 p-4 text-center cursor-pointer w-48 h-32 flex items-center justify-center"
                                        onClick={handleAddNewTemplate}
                                    >
                                        <p className="text-blue-500 font-semibold">Add New Template</p>
                                    </div>
                                </div>

                                                {/* Add New Stage Input */}
                                                {template.isEditing && (
                                                    <div className="flex items-center bg-gray-100 p-2 rounded-lg">
                                                        <input
                                                            type="text"
                                                            placeholder="New Stage"
                                                            className="bg-transparent outline-none w-full"
                                                            onKeyDown={(e) => {
                                                                if (e.key === "Enter" && e.target.value.trim()) {
                                                                    handleAddStage(index, e.target.value);
                                                                    e.target.value = "";
                                                                }
                                                            }}
                                                        />
                                                        <button
                                                            onClick={(e) => {
                                                                const input = e.target.previousSibling;
                                                                if (input.value.trim()) {
                                                                    handleAddStage(index, input.value);
                                                                    input.value = "";
                                                                }
                                                            }}
                                                            className="text-blue-500 hover:text-blue-700"
                                                        >
                                                            <Plus className="w-5 h-5" />
                                                        </button>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Save Changes Button */}
                                            {template.isEditing && (
                                                <div className="flex justify-end mt-4">
                                                    <button
                                                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                                                        onClick={() => handleToggleEdit(index)}
                                                    >
                                                        Save Changes
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Add New Template Section */}
                                <div className="mb-6 w-full">
                                    <h3 className="text-lg font-semibold mb-2">Custom Template</h3>
                                    <div className="flex gap-4">
                                        <div
                                            className="border-2 border-dashed border-gray-400 p-4 text-center cursor-pointer w-48 h-32 flex items-center justify-center hover:bg-gray-50"
                                            onClick={handleAddNewTemplate}
                                        >
                                            <p className="text-blue-500 font-semibold">Add New Template</p>
                                        </div>
                                    </div>

                                    {/* New Template Form */}
                                    {newTemplate && (
                                        <div className="bg-white p-6 rounded-lg shadow-md w-full mt-4">
                                            <input
                                                type="text"
                                                value={newTemplate.title}
                                                onChange={(e) => setNewTemplate({ ...newTemplate, title: e.target.value })}
                                                className="text-lg font-semibold border border-gray-300 p-2 rounded w-full"
                                            />

                                            <div className="mt-3 space-y-2">
                                                {newTemplate.stages.map((stage, index) => (
                                                    <div key={index} className="flex justify-between bg-gray-100 p-2 rounded-lg">
                                                        <input
                                                            type="text"
                                                            value={stage}
                                                            className="bg-transparent outline-none w-full"
                                                            onChange={(e) => {
                                                                const updatedStages = [...newTemplate.stages];
                                                                updatedStages[index] = e.target.value;
                                                                setNewTemplate({ ...newTemplate, stages: updatedStages });
                                                            }}
                                                        />
                                                        <button
                                                            onClick={() => {
                                                                const updatedStages = newTemplate.stages.filter((_, i) => i !== index);
                                                                setNewTemplate({ ...newTemplate, stages: updatedStages });
                                                            }}
                                                            className="text-red-500 hover:text-red-700"
                                                        >
                                                            <Trash className="w-5 h-5" />
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="flex justify-end mt-4">
                                                <button
                                                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                                                    onClick={handleSaveNewTemplate}
                                                >
                                                    Save Template
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>

                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
