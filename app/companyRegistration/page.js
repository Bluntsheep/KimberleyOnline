"use client";
import React, { useState } from "react";
import {
  Building2,
  Users,
  MapPin,
  Globe,
  Phone,
  Mail,
  FileText,
  Plus,
  Upload,
} from "lucide-react";

export default function CompanyRegistrationPage() {
  const [currentSection, setCurrentSection] = useState("company");
  const [formData, setFormData] = useState({
    company: {
      name: "",
      registrationNumber: "",
      industry: "",
      size: "",
      website: "",
      description: "",
    },
    contact: {
      address: "",
      city: "",
      province: "",
      postalCode: "",
      phone: "",
      email: "",
      contactPerson: "",
      contactTitle: "",
    },
    hiring: {
      departments: [],
      hiringNeeds: "",
      budget: "",
      timeline: "",
    },
  });

  const sections = [
    { id: "company", label: "Company Info", icon: Building2 },
    { id: "contact", label: "Contact Details", icon: MapPin },
    { id: "hiring", label: "Hiring Needs", icon: Users },
  ];

  const industries = [
    "Technology",
    "Healthcare",
    "Finance",
    "Education",
    "Manufacturing",
    "Retail",
    "Construction",
    "Mining",
    "Agriculture",
    "Tourism",
    "Other",
  ];

  const companySizes = [
    "1-10 employees",
    "11-50 employees",
    "51-200 employees",
    "201-1000 employees",
    "1000+ employees",
  ];

  const provinces = [
    "Western Cape",
    "Eastern Cape",
    "Northern Cape",
    "Free State",
    "KwaZulu-Natal",
    "North West",
    "Gauteng",
    "Mpumalanga",
    "Limpopo",
  ];

  const updateFormData = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
  };

  const addDepartment = () => {
    const dept = prompt("Enter department name:");
    if (dept) {
      setFormData((prev) => ({
        ...prev,
        hiring: {
          ...prev.hiring,
          departments: [...prev.hiring.departments, dept],
        },
      }));
    }
  };

  const removeDepartment = (index) => {
    setFormData((prev) => ({
      ...prev,
      hiring: {
        ...prev.hiring,
        departments: prev.hiring.departments.filter((_, i) => i !== index),
      },
    }));
  };

  const renderCompanyInfo = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-[#08CB00] tracking-wider mb-2">
            Company Name *
          </label>
          <input
            type="text"
            value={formData.company.name}
            onChange={(e) => updateFormData("company", "name", e.target.value)}
            className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-slate-300 focus:border-[#08CB00] focus:outline-none"
            placeholder="Enter your company name"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-[#08CB00] tracking-wider mb-2">
            Registration Number
          </label>
          <input
            type="text"
            value={formData.company.registrationNumber}
            onChange={(e) =>
              updateFormData("company", "registrationNumber", e.target.value)
            }
            className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-slate-300 focus:border-[#08CB00] focus:outline-none"
            placeholder="Company registration number"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-[#08CB00] tracking-wider mb-2">
            Industry *
          </label>
          <select
            value={formData.company.industry}
            onChange={(e) =>
              updateFormData("company", "industry", e.target.value)
            }
            className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-slate-300 focus:border-[#08CB00] focus:outline-none"
            required>
            <option value="">Select industry</option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm text-[#08CB00] tracking-wider mb-2">
            Company Size *
          </label>
          <select
            value={formData.company.size}
            onChange={(e) => updateFormData("company", "size", e.target.value)}
            className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-slate-300 focus:border-[#08CB00] focus:outline-none"
            required>
            <option value="">Select company size</option>
            {companySizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm text-[#08CB00] tracking-wider mb-2">
          Website
        </label>
        <input
          type="url"
          value={formData.company.website}
          onChange={(e) => updateFormData("company", "website", e.target.value)}
          className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-slate-300 focus:border-[#08CB00] focus:outline-none"
          placeholder="https://www.yourcompany.com"
        />
      </div>

      <div>
        <label className="block text-sm text-[#08CB00] tracking-wider mb-2">
          Company Description *
        </label>
        <textarea
          value={formData.company.description}
          onChange={(e) =>
            updateFormData("company", "description", e.target.value)
          }
          rows={4}
          className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-slate-300 focus:border-[#08CB00] focus:outline-none resize-none"
          placeholder="Describe your company, its mission, and what makes it unique..."
          required
        />
      </div>

      <div className="bg-slate-700/30 rounded-lg p-4">
        <div className="flex items-center space-x-2 mb-3">
          <Upload className="w-5 h-5 text-[#08CB00]" />
          <span className="text-sm text-[#08CB00] tracking-wider">
            Company Logo
          </span>
        </div>
        <div className="border-2 border-dashed border-slate-600 rounded-lg p-6 text-center">
          <p className="text-slate-400 text-sm">
            Upload your company logo (Optional)
          </p>
          <p className="text-xs text-slate-500 mt-1">PNG, JPG up to 5MB</p>
          <input type="file" accept="image/*" className="hidden" />
          <button className="mt-3 text-[#08CB00] hover:text-[#06A800] text-sm">
            Choose File
          </button>
        </div>
      </div>
    </div>
  );

  const renderContactDetails = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm text-[#08CB00] tracking-wider mb-2">
          Business Address *
        </label>
        <input
          type="text"
          value={formData.contact.address}
          onChange={(e) => updateFormData("contact", "address", e.target.value)}
          className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-slate-300 focus:border-[#08CB00] focus:outline-none"
          placeholder="Street address"
          required
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-sm text-[#08CB00] tracking-wider mb-2">
            City *
          </label>
          <input
            type="text"
            value={formData.contact.city}
            onChange={(e) => updateFormData("contact", "city", e.target.value)}
            className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-slate-300 focus:border-[#08CB00] focus:outline-none"
            placeholder="City"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-[#08CB00] tracking-wider mb-2">
            Province *
          </label>
          <select
            value={formData.contact.province}
            onChange={(e) =>
              updateFormData("contact", "province", e.target.value)
            }
            className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-slate-300 focus:border-[#08CB00] focus:outline-none"
            required>
            <option value="">Select province</option>
            {provinces.map((province) => (
              <option key={province} value={province}>
                {province}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm text-[#08CB00] tracking-wider mb-2">
            Postal Code
          </label>
          <input
            type="text"
            value={formData.contact.postalCode}
            onChange={(e) =>
              updateFormData("contact", "postalCode", e.target.value)
            }
            className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-slate-300 focus:border-[#08CB00] focus:outline-none"
            placeholder="Postal code"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-[#08CB00] tracking-wider mb-2">
            Business Phone *
          </label>
          <input
            type="tel"
            value={formData.contact.phone}
            onChange={(e) => updateFormData("contact", "phone", e.target.value)}
            className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-slate-300 focus:border-[#08CB00] focus:outline-none"
            placeholder="+27 12 345 6789"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-[#08CB00] tracking-wider mb-2">
            Business Email *
          </label>
          <input
            type="email"
            value={formData.contact.email}
            onChange={(e) => updateFormData("contact", "email", e.target.value)}
            className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-slate-300 focus:border-[#08CB00] focus:outline-none"
            placeholder="info@yourcompany.com"
            required
          />
        </div>
      </div>

      <div className="bg-slate-700/30 rounded-lg p-4">
        <h3 className="text-[#08CB00] text-sm tracking-wider mb-4">
          Primary Contact Person
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-slate-400 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              value={formData.contact.contactPerson}
              onChange={(e) =>
                updateFormData("contact", "contactPerson", e.target.value)
              }
              className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-slate-300 focus:border-[#08CB00] focus:outline-none"
              placeholder="Contact person name"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-2">
              Job Title *
            </label>
            <input
              type="text"
              value={formData.contact.contactTitle}
              onChange={(e) =>
                updateFormData("contact", "contactTitle", e.target.value)
              }
              className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-slate-300 focus:border-[#08CB00] focus:outline-none"
              placeholder="HR Manager, CEO, etc."
              required
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderHiringNeeds = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm text-[#08CB00] tracking-wider mb-2">
          Departments That Hire
        </label>
        <div className="flex flex-wrap gap-2 mb-3">
          {formData.hiring.departments.map((dept, index) => (
            <span
              key={index}
              className="bg-[#08CB00]/20 text-[#08CB00] px-3 py-1 rounded-full text-sm border border-[#08CB00]/30 flex items-center space-x-2">
              <span>{dept}</span>
              <button
                onClick={() => removeDepartment(index)}
                className="text-[#08CB00] hover:text-red-400 ml-1">
                ×
              </button>
            </span>
          ))}
        </div>
        <button
          onClick={addDepartment}
          className="flex items-center space-x-2 text-[#08CB00] hover:text-[#06A800] transition-colors duration-300">
          <Plus className="w-5 h-5" />
          <span>Add Department</span>
        </button>
      </div>

      <div>
        <label className="block text-sm text-[#08CB00] tracking-wider mb-2">
          Current Hiring Needs
        </label>
        <textarea
          value={formData.hiring.hiringNeeds}
          onChange={(e) =>
            updateFormData("hiring", "hiringNeeds", e.target.value)
          }
          rows={4}
          className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-slate-300 focus:border-[#08CB00] focus:outline-none resize-none"
          placeholder="Describe the types of positions you're looking to fill, required skills, experience levels..."
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-[#08CB00] tracking-wider mb-2">
            Monthly Hiring Budget
          </label>
          <select
            value={formData.hiring.budget}
            onChange={(e) => updateFormData("hiring", "budget", e.target.value)}
            className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-slate-300 focus:border-[#08CB00] focus:outline-none">
            <option value="">Select budget range</option>
            <option value="under-10k">Under R10,000</option>
            <option value="10k-25k">R10,000 - R25,000</option>
            <option value="25k-50k">R25,000 - R50,000</option>
            <option value="50k-100k">R50,000 - R100,000</option>
            <option value="over-100k">Over R100,000</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-[#08CB00] tracking-wider mb-2">
            Hiring Timeline
          </label>
          <select
            value={formData.hiring.timeline}
            onChange={(e) =>
              updateFormData("hiring", "timeline", e.target.value)
            }
            className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-slate-300 focus:border-[#08CB00] focus:outline-none">
            <option value="">Select timeline</option>
            <option value="immediate">Immediate (Within 1 week)</option>
            <option value="1-month">Within 1 month</option>
            <option value="1-3-months">1-3 months</option>
            <option value="3-6-months">3-6 months</option>
            <option value="ongoing">Ongoing hiring</option>
          </select>
        </div>
      </div>

      <div className="bg-slate-700/30 rounded-lg p-4">
        <h3 className="text-[#08CB00] text-sm tracking-wider mb-3">
          Subscription Plan
        </h3>
        <div className="space-y-3">
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="plan"
              value="basic"
              className="accent-[#08CB00]"
              defaultChecked
            />
            <div>
              <span className="text-slate-300">Basic Plan - Free</span>
              <p className="text-xs text-slate-400">
                Post up to 3 jobs, access to basic candidate search
              </p>
            </div>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="plan"
              value="premium"
              className="accent-[#08CB00]"
            />
            <div>
              <span className="text-slate-300">Premium Plan - R499/month</span>
              <p className="text-xs text-slate-400">
                Unlimited job postings, advanced search, priority support
              </p>
            </div>
          </label>
        </div>
      </div>
    </div>
  );

  const renderSection = () => {
    switch (currentSection) {
      case "company":
        return renderCompanyInfo();
      case "contact":
        return renderContactDetails();
      case "hiring":
        return renderHiringNeeds();
      default:
        return renderCompanyInfo();
    }
  };

  return (
    <div className="h-screen px-[10%] py-10 text-slate-300 cursor-default mt-10">
      <div className="text-center mb-14 px-48">
        <p className="text-5xl text-slate-400 font-light tracking-widest leading-normal">
          REGISTER YOUR <span className="text-[#08CB00]">COMPANY TODAY.</span>
        </p>
        <p className="mb-10 text-lg text-slate-400 font-light tracking-widest leading-normal">
          Connect with top talent in Kimberley and beyond.
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

            {/* Action Buttons */}
            <div className="flex justify-between items-center mt-6 pt-6 border-t border-slate-600">
              <button className="bg-slate-700 text-slate-300 px-6 py-2 rounded-lg font-semibold hover:bg-slate-600 transition-colors duration-300">
                Save Draft
              </button>
              <div className="flex gap-4">
                <button className="bg-[#00cbc4] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#06A800] transition-colors duration-300">
                  Preview Profile
                </button>
                <button className="bg-[#08CB00] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#06A800] transition-colors duration-300">
                  Complete Registration
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-14 font-light tracking-wider text-center divide-x divide-slate-500">
        <div className="px-10">
          <p className="text-3xl text-[#08CB00]">24hr</p>
          <p className="mt-2 text-sm text-slate-500">Account approval</p>
        </div>
        <div className="px-10">
          <p className="text-3xl text-[#08CB00]">300+</p>
          <p className="mt-2 text-sm text-slate-500">Active job seekers</p>
        </div>
        <div className="px-10">
          <p className="text-3xl text-[#08CB00]">Free</p>
          <p className="mt-2 text-sm text-slate-500">Basic plan</p>
        </div>
      </div>
    </div>
  );
}
