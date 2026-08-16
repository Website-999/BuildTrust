import { useState } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';
import { validateRequired } from '../../utils/validation';

const STATUS_OPTIONS = [
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
];

export default function ServiceForm({ initialValues, onSubmit, onCancel, submitting }) {
  const [values, setValues] = useState(
    initialValues || { title: '', description: '', category: '', imageUrl: '', status: 'active' }
  );
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  }

  function validate() {
    const next = {};
    if (!validateRequired(values.title)) next.title = 'Title is required.';
    if (!validateRequired(values.description)) next.description = 'Description is required.';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    onSubmit(values);
  }

  return (
    <form onSubmit={handleSubmit} noValidate id="service-form">
      <Input label="Title" name="title" value={values.title} onChange={handleChange} error={errors.title} required />
      <Input
        as="textarea"
        label="Description"
        name="description"
        value={values.description}
        onChange={handleChange}
        error={errors.description}
        required
      />
      <Input label="Category" name="category" value={values.category} onChange={handleChange} hint="e.g. Repair, Consulting, Design" />
      <Input
        label="Image URL"
        name="imageUrl"
        value={values.imageUrl}
        onChange={handleChange}
        hint="Leave blank to use a placeholder. Replace with a real image URL later."
      />
      <Input as="select" label="Status" name="status" value={values.status} onChange={handleChange} options={STATUS_OPTIONS} />
      <div className="form-actions">
        <Button type="button" variant="outline" onClick={onCancel} disabled={submitting}>
          Cancel
        </Button>
        <Button type="submit" loading={submitting}>
          Save Service
        </Button>
      </div>
    </form>
  );
}
