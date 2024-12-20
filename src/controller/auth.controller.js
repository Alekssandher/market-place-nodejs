const bcrypt = require('bcrypt');
const authService = require('../service/auth.service');

const login = async (req, res) => {
    try {
        const { email, senha } = req.body;
        const user = await authService.loginService(email);

        if (!user) {
            return res.status(400).send({ message: 'Usuário ou senha incorretos' });
        }

        const senhaValida = await bcrypt.compare(senha, user.senha);
        if (!senhaValida) {
            return res.status(400).send({ message: 'Usuário ou senha incorretos' });
        }

        const token = authService.generateToken(user._id);

        res.send({ email, token });
    } catch (error) {
        console.error(`Erro: ${error}`);
        res.status(500).send({ message: 'Erro no servidor' });
    }
};

module.exports = {
    login
};
