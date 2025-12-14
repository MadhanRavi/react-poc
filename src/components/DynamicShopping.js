import { useState } from "react";

/**
 * Field configuration: you can add more fields here later, and
 * the logic below automatically handles them.
 */
const fieldConfig = [
  { key: "name", label: "Item Name", type: "text" },
  { key: "qty", label: "Quantity", type: "number" },
];

export default function DynamicShopping() {
  // For the form inputs (controlled inputs)
  const [inputs, setInputs] = useState(
    // initialize keys from config to empty strings
    fieldConfig.reduce((acc, f) => ({ ...acc, [f.key]: "" }), {})
  );

  // For rows in the table
  const [rows, setRows] = useState([]);

  // Handle individual input change
  const handleChange = (key) => (e) => {
    const value = e.target.value;
    setInputs((prev) => ({ ...prev, [key]: value }));
  };

  // Add row
  const handleAdd = () => {
    // Basic validation: ensure required fields are filled
    // (you can refine this per field type later)
    const isValid = fieldConfig.every(
      (f) => inputs[f.key].toString().trim() !== ""
    );
    if (!isValid) return;

    // Add a new row object (copy current input values)
    setRows((prev) => [...prev, { ...inputs, id: Date.now() }]);

    // Clear inputs
    setInputs(fieldConfig.reduce((acc, f) => ({ ...acc, [f.key]: "" }), {}));
  };

  // Delete row by id
  const handleDelete = (id) => () => {
    setRows((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <div style={{ padding: 16, maxWidth: 600, margin: "0 auto" }}>
      <h2>Shopping List</h2>

      {/* Dynamic form inputs */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
        {fieldConfig.map((field) => (
          <div key={field.key}>
            <label style={{ display: "block", fontSize: 12, marginBottom: 4 }}>
              {field.label}
            </label>
            <input
              type={field.type}
              value={inputs[field.key]}
              onChange={handleChange(field.key)}
              style={{
                padding: 4,
                minWidth: field.type === "number" ? 80 : 150,
              }}
            />
          </div>
        ))}

        <button
          onClick={handleAdd}
          style={{ padding: "4px 12px", alignSelf: "flex-end" }}>
          Add
        </button>
      </div>

      {/* Table */}
      {rows.length > 0 && (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "left",
          }}>
          <thead>
            <tr>
              {/* Render columns from config */}
              {fieldConfig.map((f) => (
                <th
                  key={f.key}
                  style={{
                    borderBottom: "1px solid #ccc",
                    padding: "8px 4px",
                  }}>
                  {f.label}
                </th>
              ))}
              <th
                style={{ borderBottom: "1px solid #ccc", padding: "8px 4px" }}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                {/* Render each configured field value */}
                {fieldConfig.map((f) => (
                  <td
                    key={f.key}
                    style={{
                      padding: "6px 4px",
                      borderBottom: "1px solid #eee",
                    }}>
                    {row[f.key]}
                  </td>
                ))}
                <td
                  style={{
                    padding: "6px 4px",
                    borderBottom: "1px solid #eee",
                  }}>
                  <button onClick={handleDelete(row.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
