import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../../../style/modal.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  house: any;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, house }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Имя обязательно")
        .max(50, "Имя не должно превышать 50 символов"),
      email: Yup.string()
        .required("Email обязателен")
        .email("Некорректный email"),
      message: Yup.string()
        .required("Сообщение обязательно")
        .max(500, "Сообщение не должно превышать 500 символов"),
    }),
    onSubmit: async (values) => {
      const data = {
        ...values,
        houseTitle: house.title,
        housePrice: house.price,
      };

      try {
        const response = await fetch("http://localhost:3001/message", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          alert("Заявка успешно отправлена!");
          onClose();
        } else {
          alert("Ошибка при отправке заявки. Пожалуйста, попробуйте еще раз.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Ошибка при отправке заявки. Пожалуйста, попробуйте еще раз.");
      }
    },
  });

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">{title}</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="modal-item">
            <label className="modal-lable">Имя</label>
            <input
              type="text"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className={`input-modal ${
                formik.touched.name && formik.errors.name ? "input-error" : ""
              }`}
              placeholder={
                formik.touched.name && formik.errors.name
                  ? formik.errors.name
                  : "Ваше имя"
              }
            />
          </div>
          <div className="modal-item">
            <label className="modal-lable">Email</label>
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`input-modal ${
                formik.touched.email && formik.errors.email ? "input-error" : ""
              }`}
              placeholder={
                formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : "Ваш email"
              }
            />
          </div>
          <div className="modal-item">
            <label className="modal-lable">Сообщение</label>
            <textarea
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              className={`input-modal-message ${
                formik.touched.message && formik.errors.message
                  ? "input-error"
                  : ""
              }`}
              placeholder={
                formik.touched.message && formik.errors.message
                  ? formik.errors.message
                  : "Ваше сообщение"
              }
            />
          </div>
          <div className="form-button">
          <button className="modal-button" type="submit">
            Отправить заявку
          </button>
          <button className="modal-button" onClick={onClose}>
            Закрыть
          </button>
          </div>

         
        </form>
      </div>
    </div>
  );
};

export default Modal;
