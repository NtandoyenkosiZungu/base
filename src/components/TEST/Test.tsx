import  { useState } from 'react';

interface EducationEntry {
  institution: string;
  location: string;
  level: string;
  field: string;
  start_date: string;
  end_date: string;
}

function DynamicEducationForm() {
  // State to hold an array of education entries
  const [educationEntries, setEducationEntries] = useState<EducationEntry[]>([]);

  // Function to add a new education entry
  const addEducationEntry = () => {
    setEducationEntries([
      ...educationEntries,
      {
        institution: '',
        location: '',
        level: '',
        field: '',
        start_date: '',
        end_date: '',
      },
    ]);
  };

  // Function to update a specific education entry
  const updateEducationEntry = (
    index: number,
    field: keyof EducationEntry,
    value: string
  ) => {
    const updatedEntries = educationEntries.map((entry, i) =>
      i === index ? { ...entry, [field]: value } : entry
    );
    setEducationEntries(updatedEntries);
  };

  // Function to remove an education entry
  const removeEducationEntry = (index: number) => {
    const updatedEntries = educationEntries.filter((_, i) => i !== index);
    setEducationEntries(updatedEntries);
  };

  return (
    <div>
      <h1>Education History</h1>
      <button onClick={addEducationEntry}>Add Education Entry</button>
      {educationEntries.map((entry, index) => (
        <div key={index} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <h3>Education Entry #{index + 1}</h3>
          <div>
            <label>Institution:</label>
            <input
              type="text"
              value={entry.institution}
              onChange={(e) => updateEducationEntry(index, 'institution', e.target.value)}
            />
          </div>
          <div>
            <label>Location:</label>
            <input
              type="text"
              value={entry.location}
              onChange={(e) => updateEducationEntry(index, 'location', e.target.value)}
            />
          </div>
          <div>
            <label>Level:</label>
            <input
              type="text"
              value={entry.level}
              onChange={(e) => updateEducationEntry(index, 'level', e.target.value)}
            />
          </div>
          <div>
            <label>Field:</label>
            <input
              type="text"
              value={entry.field}
              onChange={(e) => updateEducationEntry(index, 'field', e.target.value)}
            />
          </div>
          <div>
            <label>Start Date:</label>
            <input
              type="date"
              value={entry.start_date}
              onChange={(e) => updateEducationEntry(index, 'start_date', e.target.value)}
            />
          </div>
          <div>
            <label>End Date:</label>
            <input
              type="date"
              value={entry.end_date}
              onChange={(e) => updateEducationEntry(index, 'end_date', e.target.value)}
            />
          </div>
          <button onClick={() => removeEducationEntry(index)}>Remove Entry</button>
        </div>
      ))}
    </div>
  );
}

export default DynamicEducationForm;