import { ConnectionFactory } from "./ConnectionFactory.js";
import {	NegociacaoDao } from "../domain/negociacao/NegociacaoDao.js";

export async function getNegociacaoDao() {
	const connection = await ConnectionFactory.getConnection();
	return new NegociacaoDao(connection);
}