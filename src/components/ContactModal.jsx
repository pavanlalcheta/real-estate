import { useState } from "react";
import {
  Modal,
  Button,
  Form,
  ModalHeader,
  FormLabel,
  FormGroup,
} from "react-bootstrap";

const ContactModal = ({ show, onClose, propertyTitle }) => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const validateName = () => {
    if (!formData.name || formData.name.length < 4) {
      setErrors({ name: "Name Must be at least 4 Characters" });
      return false;
    }
    setErrors({});
    return true;
  };

  const validateEmailAndPhone = () => {
    const newErrors = {};

    const emailRegex = "/^[^s@]+@[^s@]+.[^s@]+$/";
    const phoneRegex = "/^d{10,12}$/";

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone number must have 10-12 digits";
    }

    setErrors(newErrors);
    return Objects.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateName()) setStep(2);
  };

  const handleSubmit = () => {
    if (validateEmailAndPhone()) setStep(3);
  };

  const handleClose = () => {
    setStep(1);
    setFormData({ name: "", email: "", phone: "" });
    setErrors({});
    onClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centerd>
      <Modal.Header closeButton>
        <Modal.Title>Contact Us</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {step === 1 && (
          <>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                }}
              >
                {errors.name && (
                  <small className="text-danger">{errors.name}</small>
                )}
              </Form.Control>
            </Form.Group>
            <Button
              variant="primary"
              disabled={formData.name.length < 4}
              onClick={handleNext}
            >
              Next
            </Button>
          </>
        )}
        {step === 2 && (
          <>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter the Email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  });
                }}
              />
              {errors.email && (
                <small className="text-danger">{errors.email}</small>
              )}
            </Form.Group>

            <FormGroup>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Country code + number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
              {errors.phone && (
                <small className="text-danger">{errors.phone}</small>
              )}
            </FormGroup>

            <div className="d-flex justify-content-between">
                <Button variant="secondary" onClick={handleSubmit}>
                    Back
                </Button>
                <Button>
                    Submit
                </Button>
            </div>
          </>
        )}
        {step === 3 && (
            <div className="text-center">
                <h5 className="text-success">Thank You!</h5>
                <p>Your request has been submitted Successfuly</p>
                <Button variant="primary" onClick={handleClose}>
                    Close
                </Button>
            </div>
        )}
      </Modal.Body>
    </Modal>
  );
};


export default ContactModal;