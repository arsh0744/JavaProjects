package com.company.lockers;

import java.io.File;
import java.io.FileWriter;
import java.util.Scanner;

public class Locker {
	
	static final String projPath= "H:\\Eclipse\\April2022\\Project 1\\Locked Files";
	public static int count;
	public static Scanner userHold = new Scanner(System.in);

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		displayMenu() ;
		
		//displayMenu() ;
		
		
		
		}
		//pause.next();

	
	public static void displayMenu()
	{
		try {
		System.out.println("\t-------------------------------------------");
		System.out.println("\t Welcome to Company Archives");
		System.out.println("\t Developer Name : Arshjot Singh");
		System.out.println("\t-------------------------------------------");
		
		System.out.println("\t What would you like to do ?\n");
		
		System.out.println("\t\t 1. Display All Existing Files");
		System.out.println("\t\t 2. Add Files to existing Directory");
		System.out.println("\t\t 3. Delete a File");
		System.out.println("\t\t 4. Search a File");
		System.out.println("\t\t 5. Exit the Program");
		System.out.println("\t -------------------------");
		
		Scanner displayInput = new Scanner(System.in);
		
		int userChoice = displayInput.nextInt();
		switch (userChoice){
		
		case 1 : {
			getAllFiles();
			break;
		}
		case 2 : {
			addFile();
			break ;
			
		}
		case 3 : {
			deleteFile();
			break ;
		}
		case 4 : {
			searchFile();
			break ;
			
		}
		case 5 : {
			exitProgram();
			break ;
			
		}
		
		default : System.out.println("Wrong Choice , Please Enter Correct Choice Number");
		
		}
		}
		catch (Exception displayMenuError){
			System.out.println("Please Check Your Input  ,  Press Enter to Continue ");
			userHold.nextLine();
			displayMenu();
		}
	}
	
	public static void getAllFiles() {

		System.out.println("Displaying All Files \n");
		File[] allFiles  = new File(projPath).listFiles() ;
		
		if (allFiles.length==0) {
			System.out.println("No Files Found");
		}
		else {
			for ( count = 0; count <allFiles.length; count++) {
				System.out.println("\t"+allFiles[count].getName());
			}
			System.out.println("\n \n \t Press Enter to Continue");
		}
		userHold.nextLine();
		
		displayMenu();
		
		
		
		
	}

	public static void addFile() {
		try {
			Scanner newFile = new Scanner(System.in);
			
			System.out.println("Enter New File Name");
			String newFileName = newFile.nextLine();
			
			FileWriter writer = new FileWriter(projPath+"\\"+newFileName );
			
			System.out.println("Enter Number of Lines in File :");
			int lineCount = newFile.nextInt();
			
			for(count = 0 ; count<= lineCount ;count++) {
				System.out.println("Enter File Data");
				writer.write( newFile.nextLine() + "\n");
			}
				
			
			
			System.out.println("File Created Successfully, Press Enter to Continue");
			writer.close();
			userHold.nextLine();
			
			displayMenu();
			
			
		}
		catch (Exception excep) {
			System.out.println("Error Creating File , Press Enter to Continue");
			userHold.nextLine();
			displayMenu();			
		}
		
	}
	
	public static void deleteFile() {
		
		System.out.println("Enter File Name to Delete ");
		Scanner userFileDelete = new Scanner(System.in);
		String delFile =  userFileDelete.next();
		try {
			File checkFile = new File (projPath+"\\"+delFile);
			if (checkFile.exists()) {
				checkFile.delete();
				System.out.println("File Deleted Succesfully , Press Enter to Continue");
				userHold.nextLine();
				displayMenu();
				
			}
			else {
				System.out.println("File Does Not Exist , Press Enter to Continue");
				userHold.nextLine();
				displayMenu();
			}
			
			
		}
		catch (Exception Excp) {
			System.out.println("Error Deleting the File , Press Enter to Continue");
			userHold.nextLine();
			displayMenu();
			
		}
		
		
	}
	
    public static void searchFile() {
		System.out.println("Enter the name of the file you want to Search :");
		Scanner srcFile = new Scanner(System.in);
		String searchFile = srcFile.next();
		File chkFile = new File(projPath + "//"+searchFile);
		try {
			if (chkFile.exists())
				System.out.println("File Exists");
			else
				System.out.println("File Does not Exist");
			
			System.out.println(" \n\n Press Enter to Continue");
			userHold.nextLine();
			displayMenu();
			
		}
		catch(Exception ec) {
			System.out.println("Error Searching for File  ,   Press Enter to Continue");
			userHold.nextLine();
			displayMenu();
			
		}
		
	}
	
    public static void exitProgram() {
		System.out.println("Bye , Have Great Day !!");
		System.exit(0);
		
}
	
	
	
	
}