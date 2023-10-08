import os
import re

def extract_from_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    matches = re.findall(r'{{<app.*?>}}', content)
    return matches

def main():
    start_directory = '../content/ja'  # 現在のディレクトリを探索の起点とする
    all_matches = []

    # 再帰的にディレクトリを探索
    for dirpath, dirnames, filenames in os.walk(start_directory):
        for filename in filenames:
            if filename == 'index.md':
                file_path = os.path.join(dirpath, filename)
                all_matches.extend(extract_from_file(file_path))

    # 抽出した内容をファイルに保存
    with open('extracted_data.txt', 'w', encoding='utf-8') as f:
        for match in all_matches:
            f.write(match + '\n')

if __name__ == "__main__":
    main()
