sudo xbps-install -Suy git
mkdir git_workspace

git clone https://github.com/Coldsaga/dotfiles.git git_workspace/dotfiles

sh git_workspace/dotfiles/deployment.sh
