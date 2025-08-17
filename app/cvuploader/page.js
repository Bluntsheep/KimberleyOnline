"use client";
import React, { useState } from "react";
import {
  User,
  Briefcase,
  GraduationCap,
  Award,
  Phone,
  Mail,
  MapPin,
  Plus,
  Edit3,
  Save,
} from "lucide-react";

export default function CVBuilderPage() {
  const [currentSection, setCurrentSection] = useState("personal");
  const [formData, setFormData] = useState({
    personal: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      summary: "",
    },
    experience: [
      {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
        current: false,
      },
    ],
    education: [
      {
        institution: "",
        degree: "",
        field: "",
        startDate: "",
        endDate: "",
        current: false,
      },
    ],
    skills: [],
  });

  const sections = [
    { id: "personal", label: "Personal Info", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "skills", label: "Skills", icon: Award },
  ];

  const updatePersonalInfo = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      personal: { ...prev.personal, [field]: value },
    }));
  };

  const addExperience = () => {
    setFormData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          company: "",
          position: "",
          startDate: "",
          endDate: "",
          description: "",
          current: false,
        },
      ],
    }));
  };

  const addEducation = () => {
    setFormData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          institution: "",
          degree: "",
          field: "",
          startDate: "",
          endDate: "",
          current: false,
        },
      ],
    }));
  };

  const addSkill = () => {
    const skill = prompt("Enter a skill:");
    if (skill) {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, skill],
      }));
    }
  };

  const renderPersonalInfo = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-[#08CB00] tracking-wider mb-2">
            First Name
          </label>
          <input
            type="text"
            value={formData.personal.firstName}
            onChange={(e) => updatePersonalInfo("firstName", e.target.value)}
            className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-slate-300 focus:border-[#08CB00] focus:outline-none"
            placeholder="Enter your first name"
          />
        </div>
        <div>
          <label className="block text-sm text-[#08CB00] tracking-wider mb-2">
            Last Name
          </label>
          <input
            type="text"
            value={formData.personal.lastName}
            onChange={(e) => updatePersonalInfo("lastName", e.target.value)}
            className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-slate-300 focus:border-[#08CB00] focus:outline-none"
            placeholder="Enter your last name"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-[#08CB00] tracking-wider mb-2">
            Email
          </label>
          <input
            type="email"
            value={formData.personal.email}
            onChange={(e) => updatePersonalInfo("email", e.target.value)}
            className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-slate-300 focus:border-[#08CB00] focus:outline-none"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label className="block text-sm text-[#08CB00] tracking-wider mb-2">
            Phone
          </label>
          <input
            type="tel"
            value={formData.personal.phone}
            onChange={(e) => updatePersonalInfo("phone", e.target.value)}
            className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-slate-300 focus:border-[#08CB00] focus:outline-none"
            placeholder="+27 12 345 6789"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm text-[#08CB00] tracking-wider mb-2">
          Address
        </label>
        <input
          type="text"
          value={formData.personal.address}
          onChange={(e) => updatePersonalInfo("address", e.target.value)}
          className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-slate-300 focus:border-[#08CB00] focus:outline-none"
          placeholder="City, Province, South Africa"
        />
      </div>
      <div>
        <label className="block text-sm text-[#08CB00] tracking-wider mb-2">
          Professional Summary
        </label>
        <textarea
          value={formData.personal.summary}
          onChange={(e) => updatePersonalInfo("summary", e.target.value)}
          rows={4}
          className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-slate-300 focus:border-[#08CB00] focus:outline-none resize-none"
          placeholder="Write a brief summary of your professional background and career objectives..."
        />
      </div>
    </div>
  );

  const renderExperience = () => (
    <div className="space-y-6">
      {formData.experience.map((exp, index) => (
        <div key={index} className="bg-slate-700/30 rounded-lg p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-[#08CB00] tracking-wider mb-2">
                Company
              </label>
              <input
                type="text"
                className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-slate-300 focus:border-[#08CB00] focus:outline-none"
                placeholder="Company name"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center mt-6 pt-6 border-t border-slate-600">
              <button className="bg-slate-700 text-slate-300 px-6 py-2 rounded-lg font-semibold hover:bg-slate-600 transition-colors duration-300">
                Save Draft
              </button>
              <div className="flex gap-4">
                <button className="bg-[#00cbc4] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#06A800] transition-colors duration-300">
                  Preview CV
                </button>
                <button className="bg-[#08CB00] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#06A800] transition-colors duration-300">
                  Download CV
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm text-[#08CB00] tracking-wider mb-2">
                Position
              </label>
              <input
                type="text"
                className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-slate-300 focus:border-[#08CB00] focus:outline-none"
                placeholder="Job title"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-[#08CB00] tracking-wider mb-2">
                Start Date
              </label>
              <input
                type="month"
                className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-slate-300 focus:border-[#08CB00] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-[#08CB00] tracking-wider mb-2">
                End Date
              </label>
              <input
                type="month"
                className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-slate-300 focus:border-[#08CB00] focus:outline-none"
              />
            </div>
            <div className="flex items-end">
              <label className="flex items-center space-x-2 text-sm text-slate-400">
                <input type="checkbox" className="accent-[#08CB00]" />
                <span>Current job</span>
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm text-[#08CB00] tracking-wider mb-2">
              Description
            </label>
            <textarea
              rows={3}
              className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-slate-300 focus:border-[#08CB00] focus:outline-none resize-none"
              placeholder="Describe your responsibilities and achievements..."
            />
          </div>
        </div>
      ))}
      <button
        onClick={addExperience}
        className="flex items-center space-x-2 text-[#08CB00] hover:text-[#06A800] transition-colors duration-300">
        <Plus className="w-5 h-5" />
        <span>Add Experience</span>
      </button>
    </div>
  );

  const renderEducation = () => (
    <div className="space-y-6">
      {formData.education.map((edu, index) => (
        <div key={index} className="bg-slate-700/30 rounded-lg p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-[#08CB00] tracking-wider mb-2">
                Institution
              </label>
              <input
                type="text"
                className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-slate-300 focus:border-[#08CB00] focus:outline-none"
                placeholder="University/School name"
              />
            </div>
            <div>
              <label className="block text-sm text-[#08CB00] tracking-wider mb-2">
                Degree/Qualification
              </label>
              <input
                type="text"
                className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-slate-300 focus:border-[#08CB00] focus:outline-none"
                placeholder="Bachelor's, Master's, etc."
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-[#08CB00] tracking-wider mb-2">
              Field of Study
            </label>
            <input
              type="text"
              className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-slate-300 focus:border-[#08CB00] focus:outline-none"
              placeholder="Computer Science, Business, etc."
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-[#08CB00] tracking-wider mb-2">
                Start Date
              </label>
              <input
                type="month"
                className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-slate-300 focus:border-[#08CB00] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-[#08CB00] tracking-wider mb-2">
                End Date
              </label>
              <input
                type="month"
                className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-slate-300 focus:border-[#08CB00] focus:outline-none"
              />
            </div>
            <div className="flex items-end">
              <label className="flex items-center space-x-2 text-sm text-slate-400">
                <input type="checkbox" className="accent-[#08CB00]" />
                <span>Currently studying</span>
              </label>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={addEducation}
        className="flex items-center space-x-2 text-[#08CB00] hover:text-[#06A800] transition-colors duration-300">
        <Plus className="w-5 h-5" />
        <span>Add Education</span>
      </button>
    </div>
  );

  const renderSkills = () => (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3">
        {formData.skills.map((skill, index) => (
          <span
            key={index}
            className="bg-[#08CB00]/20 text-[#08CB00] px-3 py-1 rounded-full text-sm border border-[#08CB00]/30">
            {skill}
          </span>
        ))}
      </div>
      <button
        onClick={addSkill}
        className="flex items-center space-x-2 text-[#08CB00] hover:text-[#06A800] transition-colors duration-300">
        <Plus className="w-5 h-5" />
        <span>Add Skill</span>
      </button>
      <div className="text-xs text-slate-400 tracking-wider leading-relaxed">
        Add your technical skills, languages, certifications, and other relevant
        competencies.
      </div>
    </div>
  );

  const renderSection = () => {
    switch (currentSection) {
      case "personal":
        return renderPersonalInfo();
      case "experience":
        return renderExperience();
      case "education":
        return renderEducation();
      case "skills":
        return renderSkills();
      default:
        return renderPersonalInfo();
    }
  };

  return (
    <div className="h-screen px-[10%] py-10 text-slate-300 cursor-default mt-10">
      <div className="text-center mb-14 px-48">
        <p className="text-5xl text-slate-400 font-light tracking-widest leading-normal">
          BUILD YOUR <span className="text-[#08CB00]">PROFESSIONAL CV.</span>
        </p>
        <p className="mb-10 text-lg text-slate-400 font-light tracking-widest leading-normal">
          Create a standout CV that gets you noticed by employers.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="w-[80%] max-h-[100%]">
          <div className="bg-slate-800/50 border border-slate-600 rounded-3xl p-8 min-h-[600px]">
            {/* Section Navigation */}
            <div className="flex space-x-1 mb-6 bg-slate-700/30 rounded-lg p-1">
              {sections.map((section) => {
                const IconComponent = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setCurrentSection(section.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 flex-1 justify-center ${
                      currentSection === section.id
                        ? "bg-[#08CB00] text-black"
                        : "text-slate-400 hover:text-slate-300"
                    }`}>
                    <IconComponent className="w-4 h-4" />
                    <span>{section.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Form Content */}
            <div className="overflow-y-auto max-h-[500px]">
              {renderSection()}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-14 font-light tracking-wider text-center divide-x divide-slate-500">
        <div className="px-10">
          <p className="text-3xl text-[#08CB00]">10 min</p>
          <p className="mt-2 text-sm text-slate-500">Average build time</p>
        </div>
        <div className="px-10">
          <p className="text-3xl text-[#08CB00]">15+</p>
          <p className="mt-2 text-sm text-slate-500">Professional templates</p>
        </div>
        <div className="px-10">
          <p className="text-3xl text-[#08CB00]">Free</p>
          <p className="mt-2 text-sm text-slate-500">CV builder & downloads</p>
        </div>
      </div>
    </div>
  );
}
