import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { HiDotsHorizontal, HiOutlineCollection } from "react-icons/hi";
import { InputField, TextAreaField } from "../shared/form";
import { MultiSelect, Textarea, TextInput } from "@mantine/core";

const schema = Yup.object().shape({
  amount: Yup.number().positive().required(),
  date: Yup.date().nullable().required(),
  source: Yup.array().of(Yup.string()).required(),
  tags: Yup.array().of(Yup.string()).required(),
  note: Yup.string().max(5000).optional().default("Credited"),
});
const data = [
  { value: "react", label: "React" },
  { value: "ng", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "vue", label: "Vue" },
  { value: "riot", label: "Riot" },
  { value: "next", label: "Next.js" },
  { value: "blitz", label: "Blitz.js" },
];

const InputCard = () => {
  return (
    <div className="p-4 flex-1 flex flex-col m-4 w-full max-w-md shadow border rounded gap-2 bg-white hover:shadow-md">
      <InputCardHeader title={"Add income"} />
      <IncomeForm />
    </div>
  );
};

export default InputCard;

const InputCardHeader = ({ title }) => {
  return (
    <div className="flex items-center">
      <div className="grow flex items-center">
        <HiOutlineCollection className="text-slate-700 cursor-pointer" />
        <span className=" mx-4 text-sm text-slate-500 font-semibold">
          {title}
        </span>
      </div>
      <div className="flex gap-2">
        <HiDotsHorizontal />
      </div>
    </div>
  );
};

const IncomeForm = () => {
  const formik = useFormik({
    initialValues: {
      amount: "",
      date: null,
      source: [],
      tags: [],
      note: "",
    },
    validationSchema: schema,
    validateOnChange: true,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
      <TextInput
        id="incomeAmount"
        type="number"
        name="amount"
        label="Amount"
        required={true}
        placeholder="Enter amount in ₹"
        value={formik.values.amount}
        touched={formik.touched.amount}
        error={formik.errors.amount}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <TextInput
        id="incomeDate"
        type="date"
        name="date"
        label="Date"
        required={true}
        placeholder="Select date"
        value={formik.values.date}
        touched={formik.touched.date}
        error={formik.errors.date}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <MultiSelect
        id="incomeTags"
        name="tags"
        required
        data={data}
        label="Your favorite frameworks/libraries"
        placeholder="Pick all that you like"
      />

      <Textarea
        autosize
        minRows={2}
        maxRows={4}
        id="incomeNote"
        name="note"
        label="Note"
        value={formik.values.note}
        touched={formik.touched.note}
        error={formik.errors.note}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Notes"
      />

      <section className="grow flex space-x-2 pt-4 justify-end">
        <button
          className="border hover:bg-slate-100 focus:outline outline-slate-500 px-6 py-1 rounded text-slate-500"
          type="reset"
        >
          Discard
        </button>
        <button
          className="bg-slate-500 hover:bg-slate-400 px-8 py-2 rounded text-white"
          type="submit"
        >
          Add
        </button>
      </section>
    </form>
  );
};
