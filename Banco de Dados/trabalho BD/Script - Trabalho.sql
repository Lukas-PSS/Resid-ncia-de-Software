PRAGMA foreign_keys = ON;

-- CRIAÇÃO
--1)
CREATE TABLE aluno (
matricula INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
nome TEXT,
email TEXT,
turma INTEGER );

--2)
CREATE TABLE disciplina( 
id_disciplina INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
nome text,
carga_horaria INTEGER );

--3)
CREATE TABLE pauta( 
id_pauta INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
matricula INTEGER,
id_disciplina INTEGER,
nota_1 REAL,
nota_2 REAL,
nota_3 REAL,
FOREIGN KEY(matricula) REFERENCES aluno(matricula),
FOREIGN KEY(id_disciplina) REFERENCES disciplina(id_disciplina) );

--4)
ALTER TABLE pauta RENAME COLUMN nota_1 TO avaliacao_1;
ALTER TABLE pauta RENAME COLUMN nota_2 TO avaliacao_2;
ALTER TABLE pauta RENAME COLUMN nota_3 TO avaliacao_3;

-- INSERÇÃO
--1)
INSERT INTO aluno (nome ,email, turma)
VALUES ('Ana Paula Silva','aps@residencia.com.br',1),
('João Souza','js@residencia.com.br',1),
('Maria Moreira','mm@residencia.com.br',1),
('Daiane Costa','dc@residencia.com.br',2),
('Guilherme Silva','gs@residencia.com.br',1),
('Júlia Almeida','ja@residencia.com.br',2),
('Diogo Andrade','da@residencia.com.br',2),
('Manuela Botelho','mb@gmail.com',1),
('Thiago Tavares','tt@residencia.com',2),
('João Pedro Carvalho','jpc@residencia.com.br',1);

--2)
INSERT INTO disciplina (nome, carga_horaria) 
VALUES ('Banco de dados',24),
('Lógica de programação',40),
('Programação backend',44);

--3)
INSERT INTO pauta (matricula, id_disciplina, avaliacao_1, avaliacao_2, avaliacao_3) 
VALUES ((select matricula from aluno where nome like 'Ana Paula Silva'), (select id_disciplina from disciplina where nome like 'Banco de dados'), 10,9,10),
((select matricula from aluno where nome like 'Ana Paula Silva'), (select id_disciplina from disciplina where nome like 'Lógica de programação'), 9,8,7),
((select matricula from aluno where nome like 'Ana Paula Silva'), (select id_disciplina from disciplina where nome like 'Programação backend'), 7,7,9),
((select matricula from aluno where nome like 'João Souza'), (select id_disciplina from disciplina where nome like 'Banco de dados'), 9,6,7),
((select matricula from aluno where nome like 'João Souza'), (select id_disciplina from disciplina where nome like 'Lógica de programação'), 10,10,10),
((select matricula from aluno where nome like 'João Souza'), (select id_disciplina from disciplina where nome like 'Programação backend'), 9,8,9),
((select matricula from aluno where nome like 'Maria Moreira'), (select id_disciplina from disciplina where nome like 'Banco de dados'), 10,7,7),
((select matricula from aluno where nome like 'Daiane Costa'), (select id_disciplina from disciplina where nome like 'Lógica de programação'), 8,6,9),
((select matricula from aluno where nome like 'Daiane Costa'), (select id_disciplina from disciplina where nome like 'Programação backend'), 6,6,8),
((select matricula from aluno where nome like 'Guilherme Silva'), (select id_disciplina from disciplina where nome like 'Programação backend'), 8,6,9),
((select matricula from aluno where nome like 'Diogo Andrade'), (select id_disciplina from disciplina where nome like 'Banco de dados'), 8,8,10),
((select matricula from aluno where nome like 'Manuela Botelho'), (select id_disciplina from disciplina where nome like 'Lógica de programação'), 5,7,7),
((select matricula from aluno where nome like 'Thiago Tavares'), (select id_disciplina from disciplina where nome like 'Programação backend'), 5,5,4),
((select matricula from aluno where nome like 'Thiago Tavares'), (select id_disciplina from disciplina where nome like 'Lógica de programação'), 7,7,6),
((select matricula from aluno where nome like 'João Pedro Carvalho'), (select id_disciplina from disciplina where nome like 'Banco de dados'), 5,5,2);


-- ATUALIZAÇÃO DOS DADOS

--1)
UPDATE aluno set email = 'mb@residencia.com.br' WHERE nome like 'Manuela Botelho';

--2)
UPDATE pauta set avaliacao_3 = 7 WHERE matricula = 10 AND id_disciplina = 1;


-- CONSULTAS

--1)
SELECT nome, turma FROM aluno;

--2)
SELECT COUNT(nome) FROM aluno;

--3)
--SELECT COUNT(matricula) FROM pauta GROUP BY id_disciplina;

SELECT d.nome, COUNT(p.matricula) FROM disciplina d, pauta p  WHERE p.id_disciplina = d.id_disciplina GROUP BY  d.nome;

--4)
SELECT a.nome, d.nome, p.avaliacao_1, p.avaliacao_2, p.avaliacao_3 FROM aluno a, disciplina d, pauta p WHERE a.matricula = p.matricula and p.id_disciplina = d.id_disciplina;

--5)
SELECT a.nome, COUNT(p.matricula) FROM aluno a, pauta p, disciplina d WHERE a.matricula = p.matricula and d.id_disciplina = p.id_disciplina GROUP BY a.nome ORDER BY a.nome;

--6)
SELECT a.nome, d.nome, ROUND(((p.avaliacao_1 + p.avaliacao_2 + p.avaliacao_3)/3),2) AS MEDIA FROM aluno a, disciplina d, pauta p WHERE a.matricula = p.matricula and p.id_disciplina = d.id_disciplina;

--7)
SELECT a.nome, d.nome, ROUND(((p.avaliacao_1 + p.avaliacao_2 + p.avaliacao_3)/3),2) AS MEDIA FROM aluno a, disciplina d, pauta p WHERE a.matricula = p.matricula and p.id_disciplina = d.id_disciplina AND MEDIA < 6;

--8)
SELECT d.nome, AVG(p.avaliacao_1) AS media_1, AVG(p.avaliacao_2) AS media_2, AVG(p.avaliacao_3) AS media_3 FROM disciplina d, pauta p WHERE p.id_disciplina = d.id_disciplina GROUP by d.nome order by d.nome;

--9)
SELECT
	a.nome,
	MAX(p.avaliacao_1)
FROM
	aluno a,
	pauta p,
	disciplina d
WHERE
	a.matricula = p.matricula
	AND p.id_disciplina = 1;