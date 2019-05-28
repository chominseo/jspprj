package com.newlecture.web.dao.file;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import com.newlecture.web.dao.NoticeDao;
import com.newlecture.web.entity.Notice;

public class FileNoticeDao implements NoticeDao {

	
	
	@Override
	public List<Notice> getList() {
		List<Notice> notices = new ArrayList<>();
		try {
			FileInputStream fis = new FileInputStream(
					"D:\\java\\workspace\\JSPPrj\\WebContent\\WEB-INF\\data\\notice-file.df");
			Scanner fscan = new Scanner(fis);

			String line = "";

			while (fscan.hasNextLine()) {
				line = fscan.nextLine();
				Notice notice = new Notice(line.split(","));
				notices.add(notice);
			}
			fscan.close();
			fis.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return notices;
	}

	@Override
	public Notice get(int id) {
		List<Notice> notices = new ArrayList<>();
		Notice n = new Notice();
		try {
			FileInputStream fis = new FileInputStream(
					"D:\\java\\workspace\\JSPPrj\\WebContent\\WEB-INF\\data\\notice-file.df");
			Scanner fscan = new Scanner(fis);

			String line = "";

			while (fscan.hasNextLine()) {
				line = fscan.nextLine();
				n = new Notice(line.split(","));
				notices.add(n);
			}
			fscan.close();
			fis.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
		for(Notice a:notices) {
			if(a.getId()==id)
				return a;
		}
		return n;

	}

}
