import { useState } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';
import { validateRequired } from '../../utils/validation';

const STATUS_OPTIONS = [
  { value: 'available', label: 'Available' },
  { value: 'unavailable', label: 'Unavailable' },
];

export default function ProductForm({ initialValues, onSubmit, onCancel, submitting }) {
  const [values, setValues] = useState(
    initialValues || {
      name: '',
      description: '',
      category: '',
      price: '',
      stock: '',
      imageUrl: '',
      status: 'available',
    }
  );
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  }

  function validate() {
    const next = {};
    if (!validateRequired(values.name)) next.name = 'Product name is required.';
    if (!validateRequired(values.description)) next.description = 'Description is required.';
    if (values.price === '' || Number.isNaN(Number(values.price)) || Number(values.price) < 0) {
      next.price = 'Enter a valid price.';
    }
    if (values.stock !== '' && (Number.isNaN(Number(values.stock)) || Number(values.stock) < 0)) {
      next.stock = 'Enter a valid stock quantity.';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    onSubmit({ ...values, price: Number(values.price), stock: values.stock === '' ? 0 : Number(values.stock) });
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Input label="Product Name" name="name" value={values.name} onChange={handleChange} error={errors.name} required />
      <Input
        as="textarea"
        label="Description"
        name="description"
        value={values.description}
        onChange={handleChange}
        error={errors.description}
        required
      />
      <div className="grid grid-2">
        <Input label="Price ($)" name="price" type="number" step="0.01" value={values.price} onChange={handleChange} error={errors.price} required />
        <Input label="Stock Quantity" name="stock" type="number" value={values.stock} onChange={handleChange} error={errors.stock} />
      </div>
      <Input label="Category" name="category" value={values.category} onChange={handleChange} hint="e.g. Electronics, Food, Apparel" />
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
          Save Product
        </Button>
      </div>
    </form>
  );
}
