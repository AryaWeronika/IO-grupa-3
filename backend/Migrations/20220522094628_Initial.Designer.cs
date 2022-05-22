﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using Strona_internetowa.Data;

namespace Strona_internetowa.Migrations
{
    [DbContext(typeof(newSurveyContext))]
    [Migration("20220522094628_Initial")]
    partial class Initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 63)
                .HasAnnotation("ProductVersion", "5.0.17")
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

            modelBuilder.Entity("Strona_internetowa.Models.Allergy", b =>
                {
                    b.Property<int>("allergyID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("allergyName")
                        .HasColumnType("text");

                    b.Property<int?>("surveyID")
                        .HasColumnType("integer");

                    b.HasKey("allergyID");

                    b.HasIndex("surveyID");

                    b.ToTable("allergy");
                });

            modelBuilder.Entity("Strona_internetowa.Models.FoodAvoided", b =>
                {
                    b.Property<int>("foodAvoidedID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("foodAvoidedName")
                        .HasColumnType("text");

                    b.Property<int?>("surveyID")
                        .HasColumnType("integer");

                    b.HasKey("foodAvoidedID");

                    b.HasIndex("surveyID");

                    b.ToTable("foodAvoided");
                });

            modelBuilder.Entity("Strona_internetowa.Models.HealthProblem", b =>
                {
                    b.Property<int>("healthProblemID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("healthProblemName")
                        .HasColumnType("text");

                    b.Property<int?>("surveyID")
                        .HasColumnType("integer");

                    b.HasKey("healthProblemID");

                    b.HasIndex("surveyID");

                    b.ToTable("healthProblem");
                });

            modelBuilder.Entity("Strona_internetowa.Models.Person", b =>
                {
                    b.Property<int>("personID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<int>("age")
                        .HasColumnType("integer");

                    b.Property<string>("firstName")
                        .HasColumnType("text");

                    b.Property<int>("height")
                        .HasColumnType("integer");

                    b.Property<int?>("surveyID")
                        .HasColumnType("integer");

                    b.Property<string>("username")
                        .HasColumnType("text");

                    b.Property<int>("weight")
                        .HasColumnType("integer");

                    b.HasKey("personID");

                    b.HasIndex("surveyID");

                    b.ToTable("person");
                });

            modelBuilder.Entity("Strona_internetowa.Models.Sickness", b =>
                {
                    b.Property<int>("sicknessID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("sicknessName")
                        .HasColumnType("text");

                    b.Property<int?>("surveyID")
                        .HasColumnType("integer");

                    b.HasKey("sicknessID");

                    b.HasIndex("surveyID");

                    b.ToTable("sickness");
                });

            modelBuilder.Entity("Strona_internetowa.Models.Survey", b =>
                {
                    b.Property<int>("surveyID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("activityAmount")
                        .HasColumnType("text");

                    b.Property<string>("alcoholUsage")
                        .HasColumnType("text");

                    b.Property<string>("cigaretteUsage")
                        .HasColumnType("text");

                    b.Property<string>("coffeeUsage")
                        .HasColumnType("text");

                    b.Property<string>("energyQuality")
                        .HasColumnType("text");

                    b.Property<string>("favouriteActivity")
                        .HasColumnType("text");

                    b.Property<string>("hoursRelaxed")
                        .HasColumnType("text");

                    b.Property<string>("hoursSlept")
                        .HasColumnType("text");

                    b.Property<string>("hoursWorked")
                        .HasColumnType("text");

                    b.Property<bool>("medicationIntake")
                        .HasColumnType("boolean");

                    b.Property<string>("sleepQuality")
                        .HasColumnType("text");

                    b.Property<string>("work")
                        .HasColumnType("text");

                    b.HasKey("surveyID");

                    b.ToTable("survey");
                });

            modelBuilder.Entity("Strona_internetowa.Models.Allergy", b =>
                {
                    b.HasOne("Strona_internetowa.Models.Survey", null)
                        .WithMany("allergylist")
                        .HasForeignKey("surveyID");
                });

            modelBuilder.Entity("Strona_internetowa.Models.FoodAvoided", b =>
                {
                    b.HasOne("Strona_internetowa.Models.Survey", null)
                        .WithMany("foodAvoidedlist")
                        .HasForeignKey("surveyID");
                });

            modelBuilder.Entity("Strona_internetowa.Models.HealthProblem", b =>
                {
                    b.HasOne("Strona_internetowa.Models.Survey", null)
                        .WithMany("healthProblemlist")
                        .HasForeignKey("surveyID");
                });

            modelBuilder.Entity("Strona_internetowa.Models.Person", b =>
                {
                    b.HasOne("Strona_internetowa.Models.Survey", null)
                        .WithMany("people")
                        .HasForeignKey("surveyID");
                });

            modelBuilder.Entity("Strona_internetowa.Models.Sickness", b =>
                {
                    b.HasOne("Strona_internetowa.Models.Survey", null)
                        .WithMany("sicknesslist")
                        .HasForeignKey("surveyID");
                });

            modelBuilder.Entity("Strona_internetowa.Models.Survey", b =>
                {
                    b.Navigation("allergylist");

                    b.Navigation("foodAvoidedlist");

                    b.Navigation("healthProblemlist");

                    b.Navigation("people");

                    b.Navigation("sicknesslist");
                });
#pragma warning restore 612, 618
        }
    }
}
