'use server';
import { redirect } from "next/navigation";

import { hashUserPassword, verifyPassword } from "@/lib/hash";
import { createUser, getUserByEmail } from "@/lib/user";
import { createAuthSession, destroySession } from "@/lib/auth";

const signup = async (prevState, formData) => {
  const email = formData.get('email');
  const password = formData.get('password');

  let errors = {};

  if (!email.includes('@')) {
    errors.email = 'Please enter a valid email address!';
  }

  if (password.trim().length < 8) {
    errors.password = 'Password must be at least 8 characters long.';
  }

  if (Object.keys(errors).length) {
    return {errors};
  }

  const hashedPassword = hashUserPassword(password);
  try {
    const id = createUser(email, hashedPassword);

    await createAuthSession(id);
    redirect('/training');
  } catch (error) {
    if(error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
      return {
        errors : {
          email: 'It seems like an account is already using that email'
        }
      };
    }

    throw error;
  }
};

const login = async (prevState, formData) => {
  const email = formData.get('email');
  const password = formData.get('password');

  const existingUser = getUserByEmail(email);

  if (!existingUser) {
    return {
      errors: {
        email: 'Could not authenticate user, please check your credentials.'
      }
    }
  }

  const isValidPassword = verifyPassword(existingUser.password, password);

  if (!isValidPassword) {
    return {
      errors: {
        password: 'Could not authenticate user, please check your credentials.'
      }
    }
  }

  await createAuthSession(existingUser.id);
  redirect('/training');
};

const logout = async () => {
  await destroySession();
  
  redirect('/');
};

const auth = async (mode, prevState, formData) => (mode === 'login' ? login(prevState, formData) : signup(prevState, formData));

export {
  signup,
  login,
  logout,
  auth
};