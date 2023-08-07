
import { Request, Response } from 'express';
import { models } from '../db/db';



const { QuizDoc } = models;

export async function getAllQuizzes(request: Request, response: Response): Promise<Response> {

  try {
    const data = await QuizDoc.find();
    console.log(data)
    return response.status(200).send(data);
  } catch (error) {
    console.log(Error)
    return response.status(500).send({ message: "Technical Error" });
  }
}

export async function saveQuizData(request: Request, response: Response): Promise<Response> {
  console.log(request.body)
  try {
    const data = new QuizDoc(request.body);
    await data.save();
    return response.status(200).send({ data });
  } catch (error) {
    console.log(error)
    return response.status(500).send({ message: "Technical Error" });
  }
}

export async function findById(request: Request, response: Response): Promise<Response> {

  try {
    const data = await QuizDoc.findById(request.params.id);
    return response.status(200).send(data );
  } catch (error) {
    console.log(Error)
    return response.status(500).send({ message: "Technical Error" });
  }
}

export async function deleteQuizById(request: Request, response: Response): Promise<Response> {

  try {
    console.log(request.params.id)
    const data = await QuizDoc.remove({ _id: request.params.id });
    console.log(data)
    return response.status(200).send({ data: "Deleted Successfully" });
  } catch (error) {
    console.log(Error)
    return response.status(500).send({ message: "Technical Error" });
  }
}

export async function updateQuiz(request: Request, response: Response): Promise<Response> {

  try {
    console.log(request.body)
    const data = await QuizDoc.findOneAndUpdate({ _id: request.params.id },
      request.body, { new: true });
    console.log(data)
    return response.status(200).send({ data: "Successfully Updated" });
  } catch (error) {
    console.log(Error)
    return response.status(500).send({ message: "Technical Error" });
  }
}