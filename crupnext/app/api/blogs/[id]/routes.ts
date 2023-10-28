import { NextResponse } from "next/server";
import {
  createPost,
  deletePost,
  getPost,
  updatePost,
} from "../../../../../lib/data";

export const GET = async (req: Request, res: Response) => {
  try {
    const id = req.url.split("blogs/")[1];
    console.log(id);
    const post = getPost(id);
    console.log(post);
    if (post) {
      return NextResponse.json({ message: "OK", post }, { status: 200 });
    }
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};

export const PUT = async (req: Request, res: Response) => {
  try {
    const id = req.url.split("blogs/")[1];
    const { title, desc } = await req.json();
    try {
      updatePost(id, title, desc);
      return NextResponse.json({ message: "OK" }, { status: 200 });
    } catch (error) {
      return NextResponse.json(error, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};

export const DELETE = async (req: Request, res: Response) => {
  try {
    const id = req.url.split("blogs/")[1];
    try {
      deletePost(id);
      return NextResponse.json({ message: "OK" }, { status: 200 });
    } catch (error) {
      return NextResponse.json(error, { status: 500 });
    }
  } catch (error) {}
};
